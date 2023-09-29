import { createAction } from '../../utils/reducer.utils';
import { TASKS_ACTION_TYPES } from './tasks.types';

export const fetchTasksStart = () =>
    createAction(TASKS_ACTION_TYPES.FETCH_TASKS_START);

export const fetchTasksSuccess = (tasks) =>
    createAction(TASKS_ACTION_TYPES.FETCH_TASKS_SUCCESS, tasks);

export const fetchTasksFailed = (error) =>
    createAction(TASKS_ACTION_TYPES.FETCH_TASKS_FAILED, error);
