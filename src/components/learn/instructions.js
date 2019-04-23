import React from 'react';
import study from '../../images/marginalia-productive-work.png';

export default class Instructions extends React.Component {
    render() {
        return (
            <div className="box instruction-box">
                <p>{this.props.instructions}</p>
                <div className="center-button">
                    <button onClick={this.props.handleClick}>Let's Go!</button>
                    <div className="study-img-contain">
                    <img id="study-img" src={study} alt="person studying" />
                    </div>
                </div>
            </div>
        )
    }
}