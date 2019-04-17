import React from 'react';
import study from '../../images/marginalia-productive-work.png';

export default class Instructions extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.instructions}</p>
                <button onClick={this.props.handleClick}>Let's Go!</button>
                <img src={study} alt="person studying" />
            </div>
        )
    }
}