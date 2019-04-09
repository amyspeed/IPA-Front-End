import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PutScoresByUserId } from '../../actions/scores';

export class ScoreButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log(this.props.userId);
    }

    handleClick() {
        const { finalScore, userId, currentLevel } = this.props;
        const data = {
            [currentLevel]: finalScore
        }
        console.log(data);
        this.props.dispatch(PutScoresByUserId(userId, data));
    }

    render() {
        return(
            <button
                onClick = {this.handleClick}>Submit Score!!</button>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.currentUser.id,
        currentLevel: state.levels.data.level
    };
}

export default connect(mapStateToProps)(ScoreButton);