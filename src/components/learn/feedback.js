import React from 'react';

export default class Feedback extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.feedback}</p>
                {this.props.points ? <p>{this.props.points} Points!</p> : ''}
            </div>
        );
    }
}