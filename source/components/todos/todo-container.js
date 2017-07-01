import { connect } from 'react-redux';
import Todos from './todo-component';
import { actions as todoActions } from './index';

function mapStateToProps(state) {
  return ({
    todos: state.todos.todosList,
  });
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch(todoActions.getTodos()),
    onDelete: todoId => dispatch(todoActions.deleteTodo(todoId)),
    onSearch: filteredText => dispatch(todoActions.onSearch(filteredText)),
    onAdd: todoText => dispatch(todoActions.onAdd(todoText)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

