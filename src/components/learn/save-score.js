import React from 'react';
import { Link } from 'react-router-dom';

export default class ScoreButton extends React.Component {
    render() {
        return(
            <button><Link to="/">Submit Score!!</Link></button>
        )
    }
}