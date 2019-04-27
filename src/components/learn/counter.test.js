import React from 'react';
import Counter from './counter';
import { shallow } from 'enzyme';

describe('<Counter />', () => {
    it('renders without crashing', () => {
        shallow(<Counter />);
    })
});