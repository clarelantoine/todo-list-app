import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer.utils';
import {
    getAuthUserDocument,
    onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    isUserDropownOpen: false,
    currentUser: '',
    currentUserData: {},
    setIsuserDropDown: () => {},
    setCurrentUser: () => {},
    setCurrentUserData: () => {},
});

// user reducer action types
export const USER_ACTION_TYPES = {
    SET_IS_USER_DROPDOWN_OPEN: 'SET_IS_USER_DROPDOWN_OPEN',
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SET_CURRENT_USER_DATA: 'SET_CURRENT_USER_DATA',
};

// user reducer initial state
export const INITIAL_STATE = {
    isUserDropownOpen: false,
    currentUser: '',
    currentUserData: {},
};

// user reducer
const userReducer = (state, actions) => {
    const { type, payload } = actions;

    switch (type) {
        case USER_ACTION_TYPES.SET_IS_USER_DROPDOWN_OPEN:
            return {
                ...state,
                isUserDropownOpen: payload,
            };

        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };

        case USER_ACTION_TYPES.SET_CURRENT_USER_DATA:
            return {
                ...state,
                currentUserData: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    // instanciate the user reducer
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { isUserDropownOpen, currentUser, currentUserData } = state;

    // dispatch actions
    const setIsuserDropDownOpen = (bool) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_IS_USER_DROPDOWN_OPEN, bool)
        );
    };

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };

    const setCurrentUserData = (userData) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER_DATA, userData)
        );
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if (user) {
                // TO BE REFACTORED//
                const userData = await getAuthUserDocument(user);
                setCurrentUserData(userData);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        isUserDropownOpen,
        currentUser,
        currentUserData,
        setIsuserDropDownOpen,
        setCurrentUser,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
