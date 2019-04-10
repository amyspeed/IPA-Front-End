import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PutScoresByUserId } from '../../actions/scores';

export class ScoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        const { finalScore, userId, currentLevel } = this.props;
        const { level1, level2, level3 } = this.props.userScores;

        //Calculate total score based on current level
        let newTotal;
        if (currentLevel === "level1") {
            newTotal = Math.abs(finalScore + level2 + level3)
            console.log(newTotal, currentLevel)
        }
        else if (currentLevel === "level2") {
            newTotal = Math.abs(level1 + finalScore + level3)
            console.log(newTotal, currentLevel)
        }
        else {
            newTotal = Math.abs(level1 + level2 + finalScore)
            console.log(newTotal, currentLevel)
        }
        
        const putData = {
            [currentLevel]: finalScore,
            totalScore: newTotal
        }

        this.props.dispatch(PutScoresByUserId(userId, putData));
        console.log("put current", putData);
    };

    componentDidUpdate() {
    }

    render() {
        return(
            <button>
                <Link to="/" onClick = {this.handleClick}>Submit Score!!</Link>
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentLevel: state.levels.data.level,
        userId: state.auth.currentUser.id,
        userScores: state.scores.thisUser
    };
}

export default connect(mapStateToProps)(ScoreButton);