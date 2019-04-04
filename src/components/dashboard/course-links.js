import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, focus } from 'redux-form';
import { fetchLevel } from '../../actions/levels';
// import learn from '../learn/learn';
// import { fetchLevel1 } from '../../actions/levels';

export class CourseLinks extends React.Component {
    onSelect(levelId) {
        return this.props.dispatch(fetchLevel(levelId))
    }

    render() {
        return (            
            <form className="learn-form"
                    onSelect={this.props.handleSubmit(levelId =>
                        this.onSelect(levelId))}
            >
                <button level = "1">
                    <Link 
                        to ='/learn/5ca54db1eebaf529016271aa'
                    >
                        Level 1
                    </Link>
                </button>
                <button disabled={this.props.pristine || this.props.submitting}
                        level = "2"
                >
                    <Link 
                        to ='/learn/5ca54db1eebaf529016271a9'
                    >
                        Level 2
                    </Link>
                </button>
                <button disabled={this.props.pristine || this.props.submitting}
                        level = "3"
                >
                    <Link 
                        to ='/learn/5ca54db1eebaf529016271a8'
                    >
                        Level 3
                    </Link>
                </button>
            </form>
        );
    }
};

export default reduxForm({
    form: 'fetchLevel',
    onSubmitFail: (errors, dispatch) => dispatch(focus('fetchLevel', 'levelId'))
})(CourseLinks);