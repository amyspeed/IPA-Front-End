import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from '../../actions/utils';
import * as R from 'ramda';
import LeaderBoardView from './leader-board-view';
// import { fetchAllScores } from '../../actions/scores';


export class LeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userScores: [],
            error: null,
            loading: false
        } 
    }

    componentDidMount() {
        this.fetchAllScores();
    }
    
    componentDidUpdate() {
        console.log(this.state);
    }

    fetchAllScores() {
        this.setState({
            error: null,
            loading: true
        });

        // fetch(`${API_BASE_URL}/users/scores/:id`, {
        //     method: 'GET',
        //     headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM5MDg4MTdmNzVjYTcwZTlmZDJhZGEzIiwidXNlcm5hbWUiOiJkZW1vMyIsImZpcnN0TmFtZSI6IkZyaWVuZCIsInF1aXoxIjowLCJxdWl6MiI6MCwicXVpejMiOjAsInRvdGFsU2NvcmUiOjB9LCJpYXQiOjE1NTM2MzQ4MzQsImV4cCI6MTU1NDIzOTYzNCwic3ViIjoiZGVtbzMifQ.l8Z8raUVRPK6bBVpyd3vrSfSWi3q-tD4CAJMHXh4PH4`}
        // })
        //     .then(res => normalizeResponseErrors(res))
        //     .then(res => res.json())
        //     .then((userData) => {
        //         this.setState({
        //         userScores: userData,
        //         loading: false
        //     })})
        //     .catch(err => {
        //         this.setState({
        //             error: err,
        //             loading: false
        //     });
        // });

        // const authToken = this.auth.authToken;
        return fetch(`${API_BASE_URL}/users/scores`, {
            method: 'GET',
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWM5MDg4MTdmNzVjYTcwZTlmZDJhZGEzIiwidXNlcm5hbWUiOiJkZW1vMyIsImZpcnN0TmFtZSI6IkZyaWVuZCIsInF1aXoxIjowLCJxdWl6MiI6MCwicXVpejMiOjAsInRvdGFsU2NvcmUiOjB9LCJpYXQiOjE1NTM2MzQ4MzQsImV4cCI6MTU1NDIzOTYzNCwic3ViIjoiZGVtbzMifQ.l8Z8raUVRPK6bBVpyd3vrSfSWi3q-tD4CAJMHXh4PH4`}
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then((userData) => {
                this.setState({
                userScores: userData,
                loading: false
            })})
            .catch(err => {
                this.setState({
                    error: err,
                    loading: false
                });
            });
    };

    rankName(index) {
        if (index === 0) {
            return "GOLD"
        }

        if (index === 1) {
            return "SILVER"
        }

        if (index === 2) {
            return "BRONZE"
        }

        if (index === 3) {
            return 4
        }

        if (index === 4) {
            return 5
        }

        return index + 1;
    }

    render() {
        const allData = this.state.userScores;

        //Sort data by level 1 scores
        const level1Sort = R.sortWith([
            R.descend(R.prop('level1')),
            R.ascend(R.prop('username'))
        ]);
        const level1Winners = level1Sort(allData);

        //Sort data by level 2 scores
        const level2Sort = R.sortWith([
            R.descend(R.prop('level2')),
            R.ascend(R.prop('username'))
        ]);
        const level2Winners = level2Sort(allData);

        //Sort data by level 3 scores
        const level3Sort = R.sortWith([
            R.descend(R.prop('level3')),
            R.ascend(R.prop('username'))
        ]);
        const level3Winners = level3Sort(allData);
        

        //Sort data by total scores
        const totalScoresSort = R.sortWith([
            R.descend(R.prop('totalScore')),
            R.ascend(R.prop('username'))
        ]);
        const overallWinners = totalScoresSort(allData);


        return (
            <LeaderBoardView level1Winners = {level1Winners} level2Winners = {level2Winners} level3Winners = {level3Winners} overallWinners = {overallWinners} rankName= {this.rankName} />
        );
    }
}

const mapStateToProps = state => {
    // const { authToken } = state.auth.authToken;
    // return {
    //     authToken
    // };
};

export default (connect(mapStateToProps)(LeaderBoard));