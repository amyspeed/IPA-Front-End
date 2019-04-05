import React from 'react';

export default class Feedback extends React.Component {

    render() {
        const { feedback, currentPoints, points, handleClick } = this.props;
        return (
            <div>
                <h3>{feedback}</h3>
                {currentPoints ? <p>{currentPoints} Points!</p> : null}
                {feedback && points ? <p>Your current score: {points}</p> : null}
                {feedback ? 
                        <button onClick={handleClick}>Next Question</button>
                : null}
            </div>
        );
    }
}