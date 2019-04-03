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
                <button levelId = "5c90a043160522672a83b680">
                    <Link 
                        to ='/learn/5c90a043160522672a83b680'
                    >
                        Level 1
                    </Link>
                </button>
                <button disabled={this.props.pristine || this.props.submitting}
                        levelId = "5c90a043160522672a83b681"
                >
                    <Link 
                        to ='/learn/5c90a043160522672a83b681'
                    >
                        Level 2
                    </Link>
                </button>
                <button disabled={this.props.pristine || this.props.submitting}
                        levelId = "5c90a043160522672a83b682"
                >
                    <Link 
                        to ='/learn/5c90a043160522672a83b682'
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