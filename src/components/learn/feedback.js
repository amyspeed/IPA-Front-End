import React from 'react';
import ScoreButton from './save-score';

export default class Feedback extends React.Component {

    render() {
        const { feedback, currentPoints, points, handleClick, lastQuestion } = this.props;
        return (
            <div>
                <h3>{feedback}</h3>
                {currentPoints ? <p>{currentPoints} Points!!</p> : null}
                {feedback ? <p>Your current score: {points}</p> : null}
                {feedback && !lastQuestion ? 
                        <button onClick={handleClick}>Next Question</button>
                : null}
                {lastQuestion ? <ScoreButton finalScore = {points} /> : null }
            </div>
        );
    }
}
