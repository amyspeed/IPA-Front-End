import React from 'react';
import Demo from './demo';
import { shallow } from 'enzyme';

describe('<Demo />', () => {
    it('renders without crashing', () => {
        shallow(<Demo />);
    })
});