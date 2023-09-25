import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutStart,
    signOutSucces,
    signUpFailed,
    signUpSucces,
} from './user.action';
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    getCurrentUser,
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    signOutUser,
} from '../../utils/firebase/firebase.utils';
import { USER_ACTION_TYPES } from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalInfo
        );

        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) {
            yield put(signOutStart());
            return;
        }
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

/**
 * Sign In Sagas
 */

// google sign in
export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}
// email & password sign in
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(
            signInAuthUserWithEmailAndPassword,
            email,
            password
        );
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

/**
 * Sign Up Sagas
 */
export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(
            createAuthUserWithEmailAndPassword,
            email,
            password
        );
        yield put(signUpSucces(user, { displayName }));
    } catch (error) {
        yield put(signUpFailed(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalInfo } }) {
    yield call(getSnapshotFromUserAuth, user, additionalInfo);
}

/**
 * Sign Out Saga
 */
export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSucces());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

/**
 * Saga Entries
 */

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
    yield all([
        call(onCheckUserSession),
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
    ]);
}
