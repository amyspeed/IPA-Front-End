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

    levelName() {
        // if (this.props.level.level === 'level1') {
        //     return 'Level 1'
        // }
        // if (this.props.level.level === 'level2') {
        //     return 'Level 2'
        // }
        // return 'Level 3'
        const levelName = JSON.stringify(this.props.level.level);
        console.log(levelName);
        const string = "string1";
        const lastCharacter = string.charAt(string.length -1);
        console.log(lastCharacter);
    }

    render() {
        const instructions = this.props.level.instructions;
        const questionData = this.props.level.questions;
        return (
            <div className="container">
                <button><Link to="/">Exit Level</Link></button>
                <h1>Level {this.levelName()}</h1>
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