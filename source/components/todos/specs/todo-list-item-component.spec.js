import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TodoListItemComponent from '../todo-list-item-component';

describe('<TodoListItemComponent />', () => {
  let wrapper, todo;
  
  beforeEach(() => {
    todo = {
      name: 'todo 1',
      completed: false,
    };
    wrapper = shallow(<TodoListItemComponent todo={todo} />);
  });

  it('should render the todo name', () => {
    expect(wrapper.find('.todo-list-item_name').at(0).text()).to.equal('todo 1');
  });

  it('should render the delete button', () => {
    expect(wrapper.find('.todo-list-item_delete-icon')).to.have.length(1);
  });

  it('should disable the item if todo has been done', () => {
    todo = { ...todo, completed: true };
    wrapper.setProps({
      todo,
    });
    expect(wrapper.find('.todo-list-item').hasClass('todo-list-item_completed')).to.be.equal(true);
  });
});
