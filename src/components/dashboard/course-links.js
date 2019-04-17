import React from 'react';
import { Link } from 'react-router-dom';
import { fetchLevel } from '../../actions/levels';
import { connect } from 'react-redux';

export class CourseLinks extends React.Component {
    constructor(props) {
        super(props);
        this.determineDisabled = this.determineDisabled.bind(this);
    }

    onSelect(levelId) {
        return this.props.dispatch(fetchLevel(levelId))
    }

    determineDisabled(id) {
        const { level1, level2} = this.props.levelScores;
        if (id === 2) {
            if (level1 > 0) {
                return false;
            }
            return true;
        }
        else {
            if (level2 > 0) {
                return false;
            }
            return true
        }

    }

    render() {
        return (            
            <form>
                <div className="col-4">
                <button className="levelButton" level = "1">
                    <Link 
                        to ='/learn/5cad18e0eade2de40405be75'
                    >
                        Level 1
                    </Link>
                </button>
                </div>
                <div className="col-4">
                {this.determineDisabled(2) ? <><p>Complete level 1 to unlock level 2</p><button className="levelButton" disabled = {true}>Level 2</button></> :
                    <button className="levelButton">
                                <Link
                                    to ='/learn/5cad18e0eade2de40405be76'
                                >
                                    Level 2
                                </Link>
                    </button>
                }
                </div>
                <div className="col-4">
                {this.determineDisabled(3) ? <><p>Complete level 2 to unlock level 3</p><button className="levelButton" disabled = {true}>Level 3</button></> :
                    <button className="levelButton">
                                <Link
                                    to ='/learn/5cad18e0eade2de40405be74'
                                >
                                    Level 3
                                </Link>
                    </button>
                }
                </div>
            </form>
        );
    }
};

const mapStateToProps = state => {
    return {
        levelScores: state.scores.thisUser
    }
}

export default connect(mapStateToProps)(CourseLinks);