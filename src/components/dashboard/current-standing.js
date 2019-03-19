import React from 'react';

export default class CurrentStanding extends React.Component {
        //Function here
        

    render() {
        return (
            <h2>
                Your current total score is this.props.totalScore! 
                You are 300 points away from the top score...
            </h2>
        );
    }
};