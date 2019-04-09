import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLevel } from '../../actions/levels';
import requiresLogin from '../dashboard/requires-login';
import Instructions from './instructions';
import Module from './module';

export class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completedInstructions: false
        }
        this.completeInstructions = this.completeInstructions.bind(this);
    }


    componentDidMount() {
        this.props.dispatch(fetchLevel(this.props.match.params.id));
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    completeInstructions() {
        this.setState({
            completedInstructions: true
        })
    }

    render() {
        const instructions = this.props.level.instructions;
        const questionData = this.props.level.questions;
        return (
            <div className="container">
                <button><Link to="/">Exit Level</Link></button>
                <h1>Level {this.props.level.level}</h1>
                {this.state.completedInstructions ? 
                    <Module questionData={questionData} /> : 
                    <Instructions instructions={instructions} handleClick={this.completeInstructions} /> }
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        level: state.levels.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Learn));