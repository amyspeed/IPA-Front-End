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
        const putData = {
            [currentLevel]: finalScore,
        }
        this.props.dispatch(PutScoresByUserId(userId, putData));
    }

    componentDidUpdate() {
        // const userId = this.props.userId;
        // const { level1, level2, level3 } = this.props.userScores;
        // const newTotal = Math.abs(level1 + level2 + level3);
        // const putData = {
        //     totalScore: newTotal
        // }
        // this.props.dispatch(PutScoresByUserId(userId, putData));
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
        // userScores: state.auth.currentUser
    };
}

export default connect(mapStateToProps)(ScoreButton);