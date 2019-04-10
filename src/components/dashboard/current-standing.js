import React from 'react';

export default class CurrentStanding extends React.Component {
    constructor(props) {
        super(props);
        this.scoreFromTop = this.scoreFromTop.bind(this);

    }
    
    scoreFromTop() {
        const standing = this.props.currentStanding;
        if (standing === 0) {
            return <h3>You hold the GOLD metal!!</h3>
        } else return <h3>You are {this.props.currentStanding} points away from the top score.</h3>
    }

    render() {
        return (
            <div>
                <h3> Your current total score is {this.props.currentScore}!</h3>
                {this.scoreFromTop()}
            </div>
        );
    }
};