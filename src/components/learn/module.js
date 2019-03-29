import React from 'react';

export default class Module extends React.Component {
    render() {
        return (
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
        )
    }
}