import React from 'react';
import PropTypes from 'prop-types';

class TodoListItem extends React.Component {
  render() {
    const { todo, onDelete } = this.props;
    const isCompleted = todo.completed && 'todo-list-item_completed';

    return (
      <div className={`todo-list-item ${isCompleted}`}>
        <div className='todo-list-item_name'>
          <i className='medium material-icons todo-list-item_icon'>toc</i>
          {todo.name}
        </div>
        <span className="todo-actions">
          <i className='medium material-icons todo-list-item_delete-icon' onClick={() => onDelete(todo.id)}>delete</i>
        </span>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
};

export default TodoListItem;
