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
        case USER_ACTION_TYPES.SIGN_OUT_START:
        case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
            return { ...state, isLoading: true };

        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload, isLoading: false };

        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null, isLoading: false };

        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
};
