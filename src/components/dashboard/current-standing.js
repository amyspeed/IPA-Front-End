import React from 'react';

export default class CurrentStanding extends React.Component {
    constructor(props) {
        super(props);
        this.scoreFromTop = this.scoreFromTop.bind(this);

    }
    
    scoreFromTop() {
        const standing = this.props.currentStanding;
        if (standing === 0) {
            return <h2>You hold the GOLD metal!!</h2>
        } else return <h2>You are {this.props.currentStanding} points away from the top score.</h2>
    }

    render() {
        return (
            <div>
                <h2> Your current total score is {this.props.currentScore}!</h2>
                {this.scoreFromTop()}
            </div>
        );
    }
};