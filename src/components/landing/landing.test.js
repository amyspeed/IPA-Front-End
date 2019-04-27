import React from 'react';
import Landing from './landing';
import { shallow } from 'enzyme';

describe('<Landing />', () => {
    it('renders without crashing', () => {
        shallow(<Landing />);
    })
});