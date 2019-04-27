import React from 'react';
import RequiresLogin from './requires-login';
import { shallow } from 'enzyme';

describe('<RequiresLogin />', () => {
    it('renders without crashing', () => {
        shallow(<RequiresLogin />);
    })
});