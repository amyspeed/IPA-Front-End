import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchAllScores } from '../../actions/scores';
import CurrentStanding from './current-standing';
import LeaderBoards from './leader-boards';
import CourseLinks from './course-links';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAllScores());
    }
    render() {
        return (
            <div className="container">
                <h1>Welcome this.props.username'!</h1>
                <CurrentStanding />
                <LeaderBoards />
                <h2>Start learning!</h2>
                <CourseLinks />
            </div>
        );
    }
};

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        scores: state.scores.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));