import { createAction } from '../../utils/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

/**
 * Sign In Actions
 */
export const googleSignInStart = () =>
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

/**
 * Sign Out Actions
 */
export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSucces = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
