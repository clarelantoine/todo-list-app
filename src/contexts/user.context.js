import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer.utils';
import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    isUserDropownOpen: false,
    currentUser: '',
    setIsuserDropDown: () => {},
    setCurrentUser: () => {},
});

// user reducer action types
export const USER_ACTION_TYPES = {
    SET_IS_USER_DROPDOWN_OPEN: 'SET_IS_USER_DROPDOWN_OPEN',
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

// user reducer initial state
export const INITIAL_STATE = {
    isUserDropownOpen: false,
    currentUser: '',
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
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    // instanciate the user reducer
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { isUserDropownOpen, currentUser } = state;

    // dispatch actions
    const setIsuserDropDownOpen = (bool) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_IS_USER_DROPDOWN_OPEN, bool)
        );
    };

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                console.log(user);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        isUserDropownOpen,
        currentUser,
        setIsuserDropDownOpen,
        setCurrentUser,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
