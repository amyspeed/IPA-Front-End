import React from 'react';
import { connect } from 'react-redux';
import { fetchLevel1 } from '../../actions/levels';
import requiresLogin from '../dashboard/requires-login';
import Instructions from './instructions';
import Module from './module';
// import Main from './main';

export class Learn1 extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchLevel1());
    }

    componentDidUpdate() {
        console.log(this.props.level.level);
    }

    render() {
        const learningData = this.props.level;
        return (
            <div className="container">
                <button>Exit Level</button>
                <h1>Level {learningData.level}</h1>
                {/* <main>
                    {React.cloneElement(this.props.children, this.props)}
                </main> */}
                <Instructions />
                <Module learningData={learningData} />
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        level: state.levels.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Learn1));