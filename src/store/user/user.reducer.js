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
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
};
