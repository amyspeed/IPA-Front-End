import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import LeaderBoards from './leader-boards';
import CourseLinks from './course-links';

export class Dashboard extends React.Component {

    render() {
        const userId = this.props.userId;

        return (
            <div className="container">
                <h1>Welcome {this.props.firstName}!</h1>
                <LeaderBoards userId = {userId} />
                <h2>Start learning!</h2>
                <CourseLinks />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        firstName: state.auth.currentUser.firstName,
        userId: state.auth.currentUser.id
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));