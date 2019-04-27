import React from 'react';
import Welcome from './welcome';
import { shallow } from 'enzyme';

describe('<Welcome />', () => {
    it('renders without crashing', () => {
        shallow(<Welcome />);
    })
});