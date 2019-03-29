import React from 'react';
// import { connect } from 'react-redux';
import { fetchLevel } from '../../actions/levels';
import requiresLogin from '../dashboard/requires-login';
import Instructions from './instructions';
import Module from './module';
// import Main from './main';

export class Learn extends React.Component {
    getLevelData(level) {
        this.props.dispatch(fetchLevel(level, this.props.match.params.levelId));
    }

    render() {
        return (
            <div className="container">
                <button>Exit Level</button>
                <h1>Level 1</h1>
                {/* <main>
                    {React.cloneElement(this.props.children, this.props)}
                </main> */}
                <Instructions />
                <Module />
            </div>

        );
    }
}

// const mapStateToProps = (state, props) => {

// };

export default requiresLogin()(Learn);