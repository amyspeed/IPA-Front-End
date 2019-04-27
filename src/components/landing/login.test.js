import React from 'react';
import LogIn from './login';
import { shallow } from 'enzyme';

describe('<LogIn />', () => {
    it('renders without crashing', () => {
        shallow(<LogIn />);
    })
});