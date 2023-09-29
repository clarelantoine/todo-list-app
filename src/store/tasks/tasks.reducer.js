import { TASKS_ACTION_TYPES } from './tasks.types';

const INITIAL_STATE = {
    tasks: [],
    filteredTasks: [],
    isLoading: false,
    error: null,
};

export const tasksReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case TASKS_ACTION_TYPES.FETCH_TASKS_START:
            return {
                ...state,
                isLoading: true,
            };

        case TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                tasks: payload,
                filteredTasks: payload,
                isLoading: false,
            };

        case TASKS_ACTION_TYPES.FETCH_TASKS_FAILED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};
