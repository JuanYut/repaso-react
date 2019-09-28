import React from 'react';
import { shallow } from 'enzyme';
import Dummy from '../UI/Dummy/Dummy';
import { sum } from '../utils/sum';

describe('Test Dummy Component', () => {
  it('Should do the correct operation', () => {
    expect(2 + 2).toBe(4);
  });

  it('Should render Dummy Component', () => {
    // Enzyme
    const wrapper = shallow(<Dummy />);
    const h3 = wrapper.find('h3');
    const result = h3.text();
    // Jest
    expect(result).toBe("Hi, I'm a Dummy :B");
  });
});
