import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Filter from '../filter-component';

describe('<Filter />', () => {
  let wrapper, onSearch;

  beforeEach(() => {
    onSearch = sinon.spy();
    wrapper = shallow(<Filter onSearch={onSearch} />);
  });

  it('should render Filter component', () => {
    expect(wrapper.length).to.be.equal(1);
  });

  it('should render the input field', () => {
    expect(wrapper.find('.todo-filter_input-field')).to.have.length(1);
  });

  it('should render the search icon on the input field', () => {
    expect(wrapper.find('.todo-filter_search-icon')).to.have.length(1);
  });
});
