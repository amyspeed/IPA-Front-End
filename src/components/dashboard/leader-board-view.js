import React from 'react';

export default class LeaderBoardView extends React.Component {
    render() {
        return (
            <section>
                <h3>Overall Top Scores</h3>
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.overallWinners.slice(0, 5).map((user, index) =>(
                    <tr>                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.totalScore}</td>
                    </tr>))}
                </tbody>
                </table>
                <h3>Level 1 Top Scores</h3>               
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.level1Winners.slice(0, 5).map((user, index) => (
                    <tr>                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.level1}</td>
                    </tr>))}
                </tbody>
                </table>
                <h3>Level 2 Top Scores</h3>
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.level2Winners.slice(0, 5).map((user, index) =>(
                    <tr>                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.level2}</td>
                    </tr>))}
                </tbody>
                </table>
                <h3>Level 3 Top Scores</h3>
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.level3Winners.slice(0, 5).map((user, index) =>(
                    <tr>                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.level3}</td>
                    </tr>))}
                </tbody>
                </table>
            </section>
        );
    }
}