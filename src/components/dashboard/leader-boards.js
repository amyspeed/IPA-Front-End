import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../config';
import { normalizeResponseErrors } from '../../actions/utils';
import * as R from 'ramda';
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
            <section>
                <h3>Level 1 Top Scores</h3>
                {/* {this.state.userScores.map(user => <h1>this is a user's score{user.quiz1}</h1>)} */}
                {level1Winners.map((user, index) =>(
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    <tr>                  
                        <td>{index}</td>
                        <td>{user.username}</td>
                        <td>{user.level1}</td>
                    </tr>
                </table>))}
                <h3>Level 2 Top Scores</h3>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>GOLD</td>
                        <td>Example</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>SILVER</td>
                        <td>Example2</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>BRONZE</td>
                        <td>Example3</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Example4</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Example5</td>
                        <td>60</td>
                    </tr>
                </table>
                <h3>Level 3 Top Scores</h3>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>GOLD</td>
                        <td>Example</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>SILVER</td>
                        <td>Example2</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>BRONZE</td>
                        <td>Example3</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Example4</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Example5</td>
                        <td>60</td>
                    </tr>
                </table>
                <h3>Overall Winners!</h3>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>GOLD</td>
                        <td>Example</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>SILVER</td>
                        <td>Example2</td>
                        <td>270</td>
                    </tr>
                    <tr>
                        <td>BRONZE</td>
                        <td>Example3</td>
                        <td>240</td>
                    </tr>
                </table>
            </section>
        );
    }
};

const mapStateToProps = state => {
    // const { authToken } = state.auth.authToken;
    // return {
    //     authToken
    // };
};

export default (connect(mapStateToProps)(LeaderBoard));