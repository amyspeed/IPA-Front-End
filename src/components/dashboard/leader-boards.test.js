import React from 'react';
import LeaderBoard from './leader-boards';
import { shallow } from 'enzyme';

describe('<LeaderBoard />', () => {
    it('renders without crashing', () => {
        shallow(<LeaderBoard />);
    })
});