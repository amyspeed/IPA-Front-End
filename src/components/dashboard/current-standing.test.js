import React from "react";
import CurrentStanding from './current-standing';
import { shallow } from 'enzyme';

describe('<CurrentStanding />', () => {
    it('renders without crashing', () => {
        shallow(<CurrentStanding />);
    })
});