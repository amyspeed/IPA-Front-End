import React from 'react';
import Learn from './learn';
import { shallow } from 'enzyme';

describe('<Learn />', () => {
    it('renders without crashing', () => {
        shallow(<Learn />);
    })
});