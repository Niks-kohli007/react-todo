import React from 'react';
import PropTypes from 'prop-types';
import _filter from 'lodash/filter';

import Modal from 'antd/lib/modal';
import Header from '../header/header-component';
import TodoList from './todo-list-component';
import Filter from '../filter/filter-component';
import TodoCreate from './todo-create-component';

// import Loading from '../loading/todo-loader-component';
 
class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();
  }

  componentWillMount() {
    this.props.getTodos();
  }

  getDefaultState() {
    return {
      dialogVisible: false,
      todoCreateText: '',
    };
  }

  setDefaultState = () => {
    this.setState(this.getDefaultState());
  }

  todoCreateInstance = (instance) => {
    this.todoCreate = instance;
  }

  onAdd = () => {
    this.props.onAdd(this.state.todoCreateText);
    this.todoCreate.clearInputs();
    this.setDefaultState();
  }

  onSearch = (filteredText) => {
    this.props.onSearch(filteredText);
  }

  onCreate = () => {
    this.setState({
      dialogVisible: true,
    });
  }
  
  onCancel = () => {
    this.setDefaultState();
    this.todoCreate.clearInputs();
  }

  onChange = (todoCreateText) => {
    this.setState({
      todoCreateText,
    });
  }

  getFilteredTodos = () => _filter(this.props.todos, todo => todo.visible)

  render() {
    const { onDelete } = this.props;
    
    const todos = this.getFilteredTodos();
    // isLoading ? <Loading /> :

    return (<div>
      <Header />
      <Filter onSearch={this.onSearch} />
      <Modal
        title="Create the todo"
        visible={this.state.dialogVisible}
        okText='ADD'
        cancelText='CANCEL'
        onOk={this.onAdd}
        onCancel={this.onCancel}
      >
        <TodoCreate
          ref={this.todoCreateInstance}
          onChange={this.onChange} />
      </Modal>
      <TodoList
        todos={todos}
        onDelete={onDelete}
      />
      <i
        className='medium material-icons todo-button todo-application-create-button'
        onClick={() => this.onCreate()}>add</i>
    </div>);
  }
}

Todos.propTypes = {
  todos: PropTypes.array,
  isLoading: PropTypes.bool,
  getTodos: PropTypes.func,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onSearch: PropTypes.func,
};

export default Todos;
