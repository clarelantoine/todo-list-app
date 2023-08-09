import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer.utils';

export const UserContext = createContext({
    isUserDropownOpen: false,
    setIsuserDropDown: () => {},
});

// user reducer action types
export const USER_ACTION_TYPES = {
    SET_IS_USER_DROPDOWN_OPEN: 'SET_IS_USER_DROPDOWN_OPEN',
};

// user reducer initial state
export const INITIAL_STATE = {
    isUserDropownOpen: false,
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
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    // instanciate the user reducer
    const [{ isUserDropownOpen }, dispatch] = useReducer(
        userReducer,
        INITIAL_STATE
    );

    // dispatch actions
    const setIsuserDropDownOpen = (bool) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_IS_USER_DROPDOWN_OPEN, bool)
        );
    };

    const value = {
        isUserDropownOpen,
        setIsuserDropDownOpen,
    };
    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
