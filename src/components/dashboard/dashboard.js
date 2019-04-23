import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import LeaderBoards from './leader-boards';
import CourseLinks from './course-links';
import './dashboard.css';

export class Dashboard extends React.Component {

    render() {
        const userId = this.props.userId;

        return (
            <div className="dashboard">
                <div className="row">
                    <div className="col-12">
                        <h1 className="greeting">Welcome, {this.props.firstName}!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Start learning...</h2>
                    </div>
                </div>
                <div className="row">
                    <CourseLinks />
                </div>
                <LeaderBoards userId = {userId} />
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