import { constants as todoConstants } from './index';

export const getTodos = () => ({
  type: todoConstants.GET_TODOS,
});

export const deleteTodo = todoId => ({
  type: todoConstants.DELETE_TODO,
  payload: {
    todoId,
  },
});

export const onSearch = filteredText => ({
  type: todoConstants.FILTER_TODO,
  payload: {
    filteredText,
  },
});

export const onAdd = todoText => ({
  type: todoConstants.ADD_TODO,
  payload: {
    todoText,
  },
});



