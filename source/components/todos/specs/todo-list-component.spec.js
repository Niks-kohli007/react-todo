import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TodoList from '../todo-list-component';
import TodoListItem from '../todo-list-item-component';

describe('<TodoList />', () => {
  let wrapper, todos;

  beforeEach(() => {
    todos = [{
      name: 'todo 1',
      completed: false,
    }, {
      name: 'todo 2',
      completed: false,
    }];
    wrapper = shallow(<TodoList todos={todos} />);
  });

  it('should render the TodoList Component', () => {
    expect(wrapper.length).to.be.equal(1);
  });

  it('should render the title of the todos list ', () => {
    expect(wrapper.find('.todo-list_title').text()).to.be.equal('Todos');
  });

  it('should render the todo list item component ', () => {
    expect(wrapper.find(TodoListItem)).to.have.length(2);
  });
});
