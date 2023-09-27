import { createAction } from '../../utils/reducer.utils';
import { ALERT_ACTION_TYPES } from './alert.types';

export const setAlert = (alert) =>
    createAction(ALERT_ACTION_TYPES.SET_ALERT, alert);

export const hideAlert = () => createAction(ALERT_ACTION_TYPES.HIDE_ALERT);
