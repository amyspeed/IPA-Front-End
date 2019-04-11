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
                <h3> Your current total score is {this.props.totalScore}!</h3>
                {this.scoreFromTop()}
                <h4>Level 1: {this.props.level1}</h4>
                <h4>Level 2: {this.props.level2}</h4>
                <h4>Level 3: {this.props.level3}</h4>
            </div>
        );
    }
};