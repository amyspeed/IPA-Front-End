import React from "react";

export default class ModuleForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.verifyInput();
        this.props.handleLast();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="answer">
                        Enter answer in English
                    </label>
                    <input
                        value={this.props.guess}
                        onChange={this.props.handleChange}
                        type="text"
                        name="answer"
                        id="answer"
                        required
                    />
                    {this.props.feedback ? '' :
                    <button className="module-buttons">
                        Submit
                    </button>
                    }
                </form>
        )
    }
}