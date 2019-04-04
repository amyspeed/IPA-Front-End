import React from "react";

export default class ModuleForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                    <label htmlFor="answer">
                        Enter answer in English
                    </label>
                    <input
                        type="text"
                        name="answer"
                        id="answer"
                        required
                    />
                    <button onClick = {this.props.loopThrough}>
                        Submit
                    </button>
                </form>
        )
    }
}