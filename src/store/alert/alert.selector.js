import { createSelector } from 'reselect';

const selectAlertReducer = (state) => state.alert;

export const selectAlert = createSelector(
    [selectAlertReducer],
    (alertSlice) => alertSlice
);
