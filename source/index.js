import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoRoot from './components/todos/todo-container';
import indexReducer from './reducers';

require('./assets/styles/base.scss');

const store = createStore(indexReducer);

ReactDom.render(
  <Provider store={store}>
    <TodoRoot />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
