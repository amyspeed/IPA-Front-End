import React from 'react';
import { connect } from 'react-redux';
import { fetchLevel2 } from '../../actions/levels';
import requiresLogin from '../dashboard/requires-login';
import Instructions from './instructions';
import Module from './module';
// import Main from './main';

export class Learn2 extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchLevel2());
    }

    componentDidUpdate() {
        console.log(this.props.level.level);
    }

    render() {
        return (
            <div className="container">
                <button>Exit Level</button>
                <h1>Level {this.props.level.level}</h1>
                {/* <main>
                    {React.cloneElement(this.props.children, this.props)}
                </main> */}
                <Instructions />
                <Module />
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        level: state.levels.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Learn2));