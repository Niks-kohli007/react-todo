// import React from 'react';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import sinon from 'sinon';

// import Todo from '../todo-component';
// import TodoFitler from '../../filter/todo-filter-component';
// import TodoList from '../todo-list-component';

// describe('<Todo />', () => {
//   let wrapper, props;

//   beforeEach(() => {
//     props = {
//       todos: [],
//       isLoading: false,
//       getTodos: sinon.spy(),
//     };
//     wrapper = shallow(<Todo {...props} />);
//   });

//   it('should render Todo component', () => {
//     expect(wrapper.length).to.be.equal(1);
//   });

//   it('should render the todo filter component', () => {
//     expect(wrapper.find(TodoFitler).length).to.be.equal(1);
//   });

//   it('should render the todo list component', () => {
//     expect(wrapper.find(TodoList).length).to.be.equal(1);
//   });


// });
