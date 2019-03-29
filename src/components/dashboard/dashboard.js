import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchAllScores } from '../../actions/scores';
import LeaderBoards from './leader-boards';
import CourseLinks from './course-links';

export class Dashboard extends React.Component {
    componentDidMount() {
        console.log(this.props.authToken);
        // this.props.dispatch(fetchAllScores());
    }

    render() {
        const authToken = this.props.authToken;
        const totalScore = this.props.totalScore;

        return (
            <div className="container">
                <h1>Welcome {this.props.firstName}!</h1>
                <LeaderBoards 
                    auth = {authToken}
                    totalScore = {totalScore}
                />
                <h2>Start learning!</h2>
                <CourseLinks />
            </div>
        );
    }
};

const mapStateToProps = state => {
    console.log(state.auth.authToken);
    return {
        authToken: state.auth.authToken,
        firstName: state.auth.currentUser.firstName,
        totalScore: state.auth.currentUser.totalScore
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));