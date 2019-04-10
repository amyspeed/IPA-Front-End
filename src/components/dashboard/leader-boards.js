import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import LeaderBoardView from './leader-board-view';
import CurrentStanding from './current-standing';
import { fetchScores, fetchScoresById } from '../../actions/scores';


export class LeaderBoard extends React.Component {
    
    componentDidMount() {
        const userId = this.props.userId
        this.props.dispatch(fetchScores());
        this.props.dispatch(fetchScoresById(userId));
    }
    
    componentDidUpdate() {
        console.log(this.props.allScores);
        console.log(this.props.thisUserScores);
    }

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
        const allData = this.props.allScores;

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

        const currentScore = this.props.thisUserScores.totalScore;

        //Calculate User's Current Standing
        let topWinner = overallWinners.slice(0, 1).map(user => user.totalScore);
        let currentStanding = Math.abs(topWinner - currentScore)
        
        return (
            <div>
                <CurrentStanding 
                    currentScore = {currentScore} 
                    currentStanding = {currentStanding} 
                />
                <LeaderBoardView 
                    level1Winners = {level1Winners} 
                    level2Winners = {level2Winners} 
                    level3Winners = {level3Winners} 
                    overallWinners = {overallWinners} 
                    rankName= {this.rankName} 
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allScores: state.scores.allUsers,
        thisUserScores: state.scores.thisUser
    };
};

export default (connect(mapStateToProps)(LeaderBoard));