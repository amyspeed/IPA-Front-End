import React from 'react';
// import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchAllScores } from '../../actions/scores';
import LeaderBoards from './leader-boards';
import CourseLinks from './course-links';

export class Dashboard extends React.Component {
    // componentDidMount() {
    //     // this.props.dispatch(fetchAllScores());
    // }

    render() {
        // authToken = this.props.authToken;
        return (
            <div className="container">
                <LeaderBoards />
                <h2>Start learning!</h2>
                <CourseLinks />
            </div>
        );
    }
};

// const mapStateToProps = state => {
//     const { currentUser } = state.auth;
//     return {
//         username: state.auth.currentUser.username,
//         name: `${currentUser.firstName} ${currentUser.lastName}`,
//         // scores: state.scores.data
//     };
// };

export default requiresLogin()(Dashboard);