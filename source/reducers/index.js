import { combineReducers } from 'redux';
import { reducers as todoReducers } from '../components/todos';

const todoApp = combineReducers({
  todos: todoReducers,
});

export default todoApp;
