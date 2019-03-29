import React from 'react';
import { connect } from 'react-redux';
import { fetchLevel } from '../../actions/levels';

export class Learn extends React.Component {
    getLevelData(level) {
        this.props.dispatch(fetchLevel(level, this.props.match.params.levelId));
    }

    render() {
        return (
            <div className="container">
                <button>Exit Level</button>
                <h1>Level 1</h1>
                <p>
                    IPA symbols are always presented in brackets.
                    Read the symbols out loud with the English language in mind.
                    Try to guess the English transcription. 
                    Write your answer in the provided box and submit.
                    Once you have feedback on your answer, begin to deconstruct
                    the sounds and commit them to memory before moving on.
                    You will be surprised how quickly you will learn in this 
                    immersive way.
                </p>
                <section>
                    <h2>Exercise 1 of 10</h2>
                    <h3>[kæt]</h3>
                        <form>
                            <label for="answer">
                                Enter answer in English
                            </label>
                            <input
                                type="text"
                            />
                            <button>
                                Submit
                            </button>
                        </form>
                        <p>Correct!! 100 points!</p>
                </section>
            </div>

        );
    }
}

const mapStateToProps = (state, props) => {

};

export default connect(mapStateToProps)(Learn);