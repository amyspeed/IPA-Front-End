import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PutScoresByUserId, fetchScoresById } from '../../actions/scores';

export class ScoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getScores = this.getScores.bind(this);
        this.updateNewTotal = this.updateNewTotal.bind(this);
    }

    handleClick() {
        
        const { finalScore, userId, currentLevel } = this.props;
        
        //Update current level
        let putData = {
            [currentLevel]: finalScore,
        }
        this.props.dispatch(PutScoresByUserId(userId, putData));
    }

    getScores() {
        // Get all updated scores
        const userId = this.props.userId;
        this.props.dispatch(fetchScoresById(userId));
    }

    updateNewTotal() {
        //Calculate new total
        const userId = this.props.userId;
        const { level1, level2, level3 } = this.props.userScores;
        const newTotal = Math.abs(level1 + level2 + level3);
        const putData = {
            totalScore: newTotal
        }
        //Update new total
        this.props.dispatch(PutScoresByUserId(userId, putData));
    }

    componentDidUpdate() {
    }

    render() {
        return(
            <div>
            <button onClick = {this.handleClick}>Submit Score!!
                {/* <Link to="/" onClick = {this.handleClick}>Submit Score!!</Link> */}
            </button>
            <button onClick = {this.getScores}>Calculate new totals</button>
            <button><Link to="/" onClick = {this.updateNewTotal}>Back to dash!</Link></button>
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