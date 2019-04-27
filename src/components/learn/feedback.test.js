import React from 'react';
import Feedback from './feedback';
import { shallow } from 'enzyme';

describe('<Feedback />', () => {
    it('renders without crashing', () => {
        shallow(<Feedback />);
    })
});