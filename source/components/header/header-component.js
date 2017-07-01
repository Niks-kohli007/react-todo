import React from 'react';

require('./header-component.scss');

const Header = () => (
  <header className='todo-header'>
    <h1 className='todo-header_title'>
      <i className="large material-icons todo-header_icon">view_week</i>
      <b>TODO</b> Application</h1>
  </header>
);

export default Header;
