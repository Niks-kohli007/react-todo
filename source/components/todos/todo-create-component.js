import React from 'react';
import PropTypes from 'prop-types';

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }
  onChange = (event) => {
    const creteTodoText = event.target.value;
    this.setState({
      inputText: event.target.value,
    })
    this.props.onChange(creteTodoText);
  }

  clearInputs = () => {
    this.setState({
      inputText: '',
    });
  }
  
  render() {
    return (
      <div className='todo-create_input'>
        <input
          className='todo-create_input-field'
          type='text'
          value={this.state.inputText}
          placeholder='Add Todo'
          onChange={this.onChange}
        />
      </div>);
  }
}

TodoCreate.propTypes = {
  onChange: PropTypes.func,
};

export default TodoCreate;
