import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import {connect} from 'react-redux';

import Landing from '../landing/landing';

export default class Dashboard extends React.Component {
    render() {
        return (
        <Router>
            <div className="container">
                <nav>
                    <h1>Logo Here</h1>
                    <button>Log Out</button>
                    <Route exact path="/" component={Landing} />
                </nav>
                <h1>Welcome firstName!</h1>
                <h2>
                    Your current total score is 0! 
                    You are 300 points away from the top score...
                </h2>
                <h3>Level 1 Top Scores</h3>
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
                <h2>Start learning!</h2>
                <h3>Level 1 Link</h3>
                <h3>Level 2 Link</h3>
                <h3>Level 3 Link</h3>
            </div>
        </Router>
        );
    }
};