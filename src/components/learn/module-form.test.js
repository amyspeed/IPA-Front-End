import React from 'react';
import ModuleForm from './module-form';
import { shallow } from 'enzyme';

describe('<ModuleForm />', () => {
    it('renders without crashing', () => {
        shallow(<ModuleForm />);
    })
});