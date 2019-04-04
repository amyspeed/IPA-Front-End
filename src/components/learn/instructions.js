import React from 'react';
// import { Link } from 'react-router-dom';

export default class Instructions extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.instructions}
                </p>
                <button onClick={this.props.handleClick}>Let's Go!
                </button>
            </div>
        )
    }
}