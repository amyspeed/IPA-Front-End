import React from 'react';
import { toast } from 'react-toastify';

export default class CurrentStanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderStanding: false
        }
        this.toastStanding = this.toastStanding.bind(this);
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({
                renderStanding: true
            })
    }.bind(this), 50)
    }

    toastStanding() {
        console.log(this.props.currentStanding);
        if (isNaN(this.props.currentStanding)) {
            console.log(this.props.currentStanding)
        } else if (this.props.currentStanding === 0) { 
            toast("You have achieved the TOP SCORE!!")
        } else { 
            toast(`You are ${this.props.currentStanding} points away from the top score.`)
        }
    }

    render() {
        let renderNow = false
        if (this.state.renderStanding) {
        renderNow = this.toastStanding()
        }

        return (
            <div>
                {renderNow}
                <h3> Your current total score is {this.props.totalScore}!</h3>
                <h4>Level 1: {this.props.level1}</h4>
                <h4>Level 2: {this.props.level2}</h4>
                <h4>Level 3: {this.props.level3}</h4>
            </div>
        );
    }
};