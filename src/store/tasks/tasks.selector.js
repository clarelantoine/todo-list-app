import { createSelector } from 'reselect';

const selectTasksReducer = (state) => state.tasks;

export const selectTasks = createSelector(
    [selectTasksReducer],
    (tasksSlice) => tasksSlice.tasks
);

export const selectFilteredTasks = createSelector(
    [selectTasks],
    (tasksSlice) => tasksSlice.filteredTasks
);
