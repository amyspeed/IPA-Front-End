import React from 'react';
import Counter from './counter';
import ModuleForm from './module-form';
import Feedback from './feedback';

export default class Module extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayIndex: 0,
            feedback: '',
            points: 0
        }
        this.loopThrough = this.loopThrough.bind(this);
        this.verify = this.verify.bind(this);
    }

    componentDidMount() {
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    
    loopThrough() {
        let arrayIndex = this.state.arrayIndex;
        let arrayIndexPlus = arrayIndex + 1;
        this.setState =({
            arrayIndex: arrayIndexPlus
        })
        console.log(arrayIndexPlus);
    }

    verify(input) {
        const index = this.state.arrayIndex;
        const correctAnswer = this.props.questionData.slice(index, index + 2).map(question => question.answer);
        const answerInput = input.value;
        let feedback;
        let points = 0;
        if (answerInput === correctAnswer) {
            feedback = 'Excellect! You are correct!';
            points = points + 100;
        }
        else {
            feedback = `Good try! The correct answer is` + correctAnswer;
        }

        this.setState({
            feedback,
            points
        });
    }

    render() {
        const index = this.state.arrayIndex;
        const questionNum = this.props.questionData.slice(index, index + 1).map(question => question.questionNum);
        const questionLength = this.props.questionData.length;

        const question = this.props.questionData.slice(index, index + 1).map(question => question.question);
        // const correctAnswer = this.props.questionData.slice(index, index + 2).map(question => question.answer);

        return (
            <section>
                <Counter questionNum = {questionNum} questionLength = {questionLength}/>
                <h3>{question}</h3>
                <ModuleForm handleClick = {this.loopThrough} verifyInput = {this.verify} />
                <Feedback verify={this.verify} />
        </section>
        )
    }
}