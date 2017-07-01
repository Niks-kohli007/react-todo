import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  onChange = (event) => {
    const filteredText = event.target.value;
    
    this.props.onSearch(filteredText);
  }

  render() {
    return (
      <div className='todo-filter_input'>
        <input
          className='todo-filter_input-field'
          type='text'
          placeholder='Search Todo'
          onChange={this.onChange}
        />
        <i className='medium material-icons todo-filter_search-icon'>search</i>
      </div>);
  }
}

Filter.propTypes = {
  onSearch: PropTypes.func,
};

export default Filter;
