import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './todo-list-item-component';

class TodoList extends React.Component {
  render() {
    const { todos, onDelete } = this.props;

    return (
      <div className='todo-list-container'>
        <header>
          <h2 className='todo-list_title'>Todos</h2>
        </header>
        <div className='todo-list'>
          {todos.map(todo => (
            <div key={todo.id} className='todo-list_item'>
              <TodoListItem todo={todo} onDelete={onDelete} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func,
};

export default TodoList;

