import React from 'react';
import { Link } from 'react-router-dom';

export default class Instructions extends React.Component {
    render() {
        return (
            <div>
                <p>
                    congratulations on your new learning endevour!
                    Here are a few pointers to help you on your journey.<br />
                    First, it is important to recognize that IPA symbols 
                    are always presented in brackets. Read the bracketed 
                    symbols out loud, keeping the English language in mind.
                    Next, try to guess the English transcription. 
                    Write your answer in the provided box and submit.
                    Once you have feedback on your answer, begin to deconstruct
                    the sounds and commit them to memory before moving on.
                    You will be surprised at how quickly you will learn IPA in this 
                    immersive way. Be sure to finish the entire level to log your
                    earned points for a chance to compete for a winning place on the leaderboards! 
                </p>
                <button>
                    <Link to="/learn/:levelId/module">Let's Go!</Link>
                </button>
            </div>
        )
    }
}