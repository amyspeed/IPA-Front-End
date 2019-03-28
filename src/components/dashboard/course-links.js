import React from 'react';
import { reduxForm, focus } from 'redux-form';
// import learn from '../learn/learn';

export class CourseLinks extends React.Component {
    // onSubmit(values) {
    //     return this.props.dispatch(learn(values.level1, values.level2, values.level3));
    // }

    render() {
        return (            
            <form className="learn-form">
                <button onClick = {() => this.props.XXX}
                        value = "level1"
                >
                    Level 1
                </button>
                <button disabled={this.props.pristine || this.props.submitting}
                        value = "level2"
                >
                    Level 2
                </button>
                <button disabled={this.props.pristine || this.props.submitting}
                        value = "level3"
                >
                    Level 3
                </button>
            </form>
        );
    }
};

export default reduxForm({
    form: 'learn',
    onSubmitFail: (errors, dispatch) => dispatch(focus('level1', 'level2', 'level3'))
})(CourseLinks);