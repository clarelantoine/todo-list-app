import { USER_ACTION_TYPES } from './user.types';

// initial state
const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

// user reducer
export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.CHECK_USER_SESSION:
        case USER_ACTION_TYPES.UPDATE_USER_PROFILE_START:
        case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
        case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
        case USER_ACTION_TYPES.SIGN_UP_START:
        case USER_ACTION_TYPES.SIGN_OUT_START:
            return { ...state, isLoading: true };

        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        case USER_ACTION_TYPES.UPDATE_USER_PROFILE_SUCCESS:
            return { ...state, currentUser: payload, isLoading: false };

        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, ...INITIAL_STATE };

        case USER_ACTION_TYPES.UPDATE_USER_PROFILE_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return { ...state, isLoading: false, error: payload };

        default:
            return state;
    }
};
