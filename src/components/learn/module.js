import React from 'react';
import { toast } from 'react-toastify';
import Counter from './counter';
import ModuleForm from './module-form';
import Feedback from './feedback';

export default class Module extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayIndex: 0,
            feedback: '',
            points: 0,
            currentPoints: 0,
            guess: '',
            lastQuestion: false
        }
        this.updateInputValue = this.updateInputValue.bind(this);
        this.verify = this.verify.bind(this);
        this.incrementQuestion = this.incrementQuestion.bind(this);
        this.checkForEnd = this.checkForEnd.bind(this);
    }

    updateInputValue(event) {
        this.setState({
            guess: event.target.value
        })
    }

    verify() {
        const index = this.state.arrayIndex;
        const correctAnswer = this.props.questionData[index].answer;
        if (this.state.guess === correctAnswer) {
            toast.warning("🏆 100 Points!!! 🌟", {position: "top-center", autoClose: 2500})
            return this.setState({
                feedback: `Excellect! "` + correctAnswer + `" is correct!`,
                points: this.state.points + 100,
                currentPoints: 100
            });
        }
        else {
            toast.error("🤷🏻‍ Oops! Incorrect... 💩", {position: "top-center", autoClose: 2500});
            return this.setState({
                feedback: `Good try! The correct answer is "` + correctAnswer + `"`
            })
        }
    }

    incrementQuestion() {
        // increment index:
        let arrayIndex = this.state.arrayIndex;
        let arrayIndexPlus = arrayIndex + 1;
        this.setState({
            arrayIndex: arrayIndexPlus,
            feedback: '',
            currentPoints: 0,
            guess: ''
        })
    }

    checkForEnd() {
        const i = this.state.arrayIndex;
        const questionNum = this.props.questionData[i].questionNum;
        const questionLength = this.props.questionData.length;
        if (questionNum === questionLength) {
            return this.setState({
                lastQuestion: true
            })
        }
        return this.state;
    }

    render() {
        const i = this.state.arrayIndex;
        const questionNum = this.props.questionData[i].questionNum;
        const questionLength = this.props.questionData.length;
        const question = this.props.questionData[i].question;
        const lastQuestion = this.state.lastQuestion;

        return (
            <section>
                <Counter 
                    questionNum = {questionNum} 
                    questionLength = {questionLength}/>
                <h3>{question}</h3>
                <ModuleForm 
                    guess={this.state.guess} 
                    handleChange= {this.updateInputValue} 
                    verifyInput = {this.verify}
                    handleLast={this.checkForEnd}
                    currentPoints={this.state.currentPoints} />
                <Feedback 
                    feedback= {this.state.feedback} 
                    points={this.state.points} 
                    handleClick={this.incrementQuestion}
                    lastQuestion = {lastQuestion}
                    currentPoints={this.state.currentPoints} />
        </section>
        )
    }
};