import { constants as todoConstants } from './index';
import _filter from 'lodash/filter';
import _map from 'lodash/map';

const defaultState = {
  todosList: [{
    name: 'Todo 1',
    id: '123',
    completed: false,
    visible: true,
  }, {
    name: 'Todo 2',
    id: '456',
    completed: false,
    visible: true,
  }, {
    name: 'Todo 3',
    id: '789',
    completed: false,
    visible: true,
  }],
};

function getFilteredTodos(todos, filteredText) {
  return _map(todos, (todo) => {
    todo.visible = true;
    if (filteredText !== '' && !todo.name.includes(filteredText)) {
      todo.visible = false;
      return todo;
    }
    return todo;
  });
}

export default function todoReducers(state = defaultState, action) {
  switch (action.type) {
    case todoConstants.GET_TODOS:
      return state;
    case todoConstants.DELETE_TODO: {
      const { todoId } = action.payload;
      const todosList = _filter(state.todosList, todo => todo.id !== todoId);
      
      return {
        ...state,
        todosList,
      };
    }
    case todoConstants.FILTER_TODO: {
      const { filteredText } = action.payload;

      return {
        ...state,
        todosList: getFilteredTodos(state.todosList, filteredText),
      };
    }
    case todoConstants.ADD_TODO: {
      const { todoText } = action.payload;
      const newTodo = {
        id: state.todosList.length + 1,
        name: todoText,
        visible: true,
        completed: false,
      };

      return {
        ...state,
        todosList: [...state.todosList, newTodo],
      };
    }
    default:
      return state;
  }
}
