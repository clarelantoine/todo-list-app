import { createAction } from '../../utils/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

/**
 * Sign In Actions
 */
export const googleSignInStart = () =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

/**
 * Sign Up Actions
 */
export const signUpStart = (email, password, displayName) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName,
    });

export const signUpSucces = (user, additionalInfo) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInfo });

export const signUpFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

/**
 * Sign Out Actions
 */
export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSucces = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
