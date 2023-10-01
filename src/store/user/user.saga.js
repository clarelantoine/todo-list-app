import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
    signInFailed,
    signInSuccess,
    signOutFailed,
    signOutStart,
    signOutSucces,
    signUpFailed,
    signUpSucces,
    updateUserProfileFailed,
    updateUserProfileSuccess,
} from './user.action';
import {
    signOutUser,
    getCurrentUser,
    signInWithGooglePopup,
    createAuthUserWithEmailAndPassword,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import {
    updateCurrentUserDocument,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firestore.utils';

import { USER_ACTION_TYPES } from './user.types';

// Get authenticated user's snapshot
export function* getSnapshotFromUserAuth(userAuth, additionalInfo) {
    try {
        const userSnapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalInfo
        );

        yield put(
            signInSuccess({
                id: userSnapshot.id,
                ...userSnapshot.data(),
            })
        );
    } catch (error) {
        yield put(signInFailed(error));
    }
}

// Check authenticated user
export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        console.log(error);
        yield put(signOutStart());
    }
}

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

// Sign up
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
 * Update User Profile Sagas
 */
export function* updateUserProfile({ payload: { displayName } }) {
    try {
        const userAuth = yield call(getCurrentUser);

        if (!userAuth) {
            yield put(signOutStart());
            return;
        }

        const userUpdatedSnapshot = yield call(
            updateCurrentUserDocument,
            userAuth,
            { displayName }
        );

        yield put(
            updateUserProfileSuccess({
                id: userUpdatedSnapshot.id,
                ...userUpdatedSnapshot.data(),
            })
        );
        console.log(userAuth);
    } catch (error) {
        yield put(updateUserProfileFailed(error));
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

export function* onUpdateUserProfileStart() {
    yield takeLatest(
        USER_ACTION_TYPES.UPDATE_USER_PROFILE_START,
        updateUserProfile
    );
}

export function* userSaga() {
    yield all([
        call(onSignUpStart),
        call(onSignOutStart),
        call(onSignUpSuccess),
        call(onCheckUserSession),
        call(onEmailSignInStart),
        call(onGoogleSignInStart),
        call(onUpdateUserProfileStart),
    ]);
}
