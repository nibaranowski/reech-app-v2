import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage';

test('should correctly render HomePage', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<HomePage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
