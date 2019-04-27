import React from 'react';
import CourseLinks from './course-links';
import { shallow } from 'enzyme';

describe('<CourseLinks />', () => {
    it('renders without crashing', () => {
        shallow(<CourseLinks />);
    })
});