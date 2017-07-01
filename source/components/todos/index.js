import * as todoActions from './todo-actions';
import todoConstants from './todo-constants';
import todoReducers from './todo-reducers';

export const actions = todoActions;
export const constants = todoConstants;
export const reducers = todoReducers;

export default {
  constants,
  actions,
  reducers,
};

