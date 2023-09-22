import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';

// root reducer
export const rootReducer = combineReducers({
    user: userReducer,
});
