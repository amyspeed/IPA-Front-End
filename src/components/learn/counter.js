import React from 'react';

export default class Counter extends React.Component {
    render() {
        return (
            <h2>Exercise {this.props.questionNum} of {this.props.questionLength}</h2>
        )
    }
}