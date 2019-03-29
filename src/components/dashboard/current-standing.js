import React from 'react';

export default class CurrentStanding extends React.Component {

    render() {
        return (
            <div>
                <h2>
                    Your current total score is {this.props.currentScore}! 
                    You are {this.props.currentStanding} points away from the top score...
                </h2>
            </div>
        );
    }
};