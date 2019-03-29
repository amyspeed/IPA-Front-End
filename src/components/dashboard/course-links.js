import React from 'react';
import { Link } from 'react-router-dom';
// import learn from '../learn/learn';
// import { fetchLevel1 } from '../../actions/levels';

export default class CourseLinks extends React.Component {

    render() {
        return (            
            <form className="learn-form">
                <h2>
                    <Link to='/learn/level1'>Level 1</Link>
                </h2>
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