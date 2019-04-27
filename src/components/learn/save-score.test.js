import React from 'react';
import SaveScore from './save-score';
import { shallow } from 'enzyme';

describe('<SaveScore />', () => {
    it('renders without crashing', () => {
        shallow(<SaveScore />);
    })
});