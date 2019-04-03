import React from 'react';

export default class Module extends React.Component {
    render() {
        // const learningData = this.props.learningData;
        // let i = 1;
        // const question = learningData.question1;

        return (
            <section>
            <h2>Exercise 1 of 10</h2>
            <h3>Questions Here!</h3>
                <form>
                    <label htmlFor="answer">
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
        )
    }
}