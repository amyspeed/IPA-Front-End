import React from 'react';
import Instructions from './instructions';
import { shallow } from 'enzyme';

describe('<Instructions />', () => {
    it('renders without crashing', () => {
        shallow(<Instructions />);
    })
});