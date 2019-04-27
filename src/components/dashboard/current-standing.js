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
    }.bind(this), 500)
    }

    toastStanding() {
        if (isNaN(this.props.currentStanding)) {
            console.log(this.props.currentStanding)
        } else if (this.props.currentStanding === 0) { 
            toast("👑 You have achieved the TOP SCORE!!", {position: "top-center"})
        } else { 
            toast(`You are ${this.props.currentStanding} points away from the top score... 🚀`, {position: "top-center"})
        }
    }

    render() {
        let renderNow = false
        if (this.state.renderStanding) {
        renderNow = this.toastStanding()
        }

        return (
            <div className="row">
                {renderNow}
                <div className="col-12">
                    <div className="total-score">
                        <h3> Your current total score is {this.props.totalScore}!</h3>
                    </div>
                </div>
                <div className="col-4">
                    <div className="level-score">
                        <h3>Level 1: {this.props.level1} points</h3>
                    </div>
                </div>
                <div className="col-4">
                    <div className="level-score">
                        <h3>Level 2: {this.props.level2} points</h3>
                    </div>
                </div>
                <div className="col-4">
                    <div className="level-score">
                        <h3>Level 3: {this.props.level3} points</h3>
                    </div>
                </div>
            </div>
        );
    }
};