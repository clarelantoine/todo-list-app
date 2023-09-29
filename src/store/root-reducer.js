import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { alertReducer } from './alert/alert.reducer';
import { tasksReducer } from './tasks/tasks.reducer';

// root reducer
export const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer,
    tasks: tasksReducer,
});
