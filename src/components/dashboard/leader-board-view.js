import React from 'react';

export default class LeaderBoardView extends React.Component {
    render() {
        return (
            <section>
                <h2>Overall Top Scores</h2>
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.overallWinners.slice(0, 5).map((user, index) =>(
                    <tr key = {index} >                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.totalScore}</td>
                    </tr>))}
                </tbody>
                </table>
                <h2>Level 1 Top Scores</h2>      
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.level1Winners.slice(0, 5).map((user, index) => (
                    <tr key = {index} >                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.level1}</td>
                    </tr>))}
                </tbody>
                </table>
                <h2>Level 2 Top Scores</h2>
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.level2Winners.slice(0, 5).map((user, index) =>(
                    <tr key = {index} >                  
                        <td>{this.props.rankName(index)}</td>
                        <td>{user.username}</td>
                        <td>{user.level2}</td>
                    </tr>))}
                </tbody>
                </table>
                <h2>Level 3 Top Scores</h2>
                <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr> 
                    {this.props.level3Winners.slice(0, 5).map((user, index) =>(
                    <tr key = {index} >                  
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