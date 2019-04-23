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
        const { level1, level2, level3, totalScore } = this.props.userScores;

        //Calculate total score based on current level and high score
        let newTotal;
        let levelScore;
        if (currentLevel === "level1") {
            if (finalScore > level1) {
                levelScore = finalScore;
                newTotal = Math.abs(finalScore + level2 + level3);
            }
            else {
                levelScore = level1;
                newTotal = totalScore;
            }
        }
        else if (currentLevel === "level2") {
            if (finalScore > level2) {
                levelScore = finalScore;
                newTotal = Math.abs(level1 + finalScore + level3);
            }
            else {
                levelScore = level2;
                newTotal = totalScore;
            }
        }
        else {
            if (finalScore > level3) {
                levelScore = finalScore;
                newTotal = Math.abs(level1 + level2 + finalScore);
            }
            else {
                levelScore = level3;
                newTotal = totalScore;
            }
        }
        
        const putData = {
            [currentLevel]: levelScore,
            totalScore: newTotal
        }

        this.props.dispatch(PutScoresByUserId(userId, putData));
        console.log("PUT data", putData);

        return levelScore || "";
    };

    componentDidUpdate() {
    }

    render() {
        return(
            <div>
                <button>
                    <Link className="link" to="/" onClick = {this.handleClick}>Submit Score!!</Link>
                </button>
                <p class="note">Your highest score of {this.handleClick()} will be saved</p>
            </div>
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