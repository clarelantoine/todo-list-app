import { ALERT_ACTION_TYPES } from './alert.types';

const INITIAL_STATE = {
    alertType: 'error',
    message: null,
    isOpen: false,
};

export const alertReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    if (payload && payload.name === 'FirebaseError') {
        switch (payload.code) {
            case 'auth/wrong-password':
            case 'auth/user-not-found':
            case 'auth/invalid-email':
                return {
                    ...state,
                    message: 'Invalid username or password!',
                    isOpen: true,
                };

            case 'auth/too-many-requests':
                return {
                    ...state,
                    message: 'Account locked! Please contact support.',
                    isOpen: true,
                };

            case 'auth/email-already-in-use':
                return {
                    ...state,
                    message: 'Account already exist!',
                    isOpen: true,
                };

            case payload.code:
                return {
                    ...state,
                    message: 'Unknown error. Please contact support',
                    isOpen: true,
                };

            default:
                return state;
        }
    }
    if (type === ALERT_ACTION_TYPES.HIDE_ALERT) {
        return {
            ...state,
            isOpen: false,
        };
    }

    return state;
};
