import React from 'react';
import { Link } from 'react-router-dom';
import { fetchLevel } from '../../actions/levels';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

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

    toastButton(id) {
        toast(`You must complete level ${id} to unlock this level`)
    }

    render() {
        return (            
            <div>
                <div className="col-4">
                <button className="levelButton enable" level = "1">
                    <Link 
                        className="link"
                        to ='/learn/5cad18e0eade2de40405be75'
                    >
                        Level 1 
                    </Link>
                </button>
                </div>
                <div className="col-4">
                {this.determineDisabled(2) ? <button className="levelButton disabled" onClick={x => this.toastButton(1)}>Level 2</button> :
                    <button className="levelButton enable">
                                <Link
                                    className="link"
                                    to ='/learn/5cad18e0eade2de40405be76'
                                >
                                    Level 2
                                </Link>
                    </button>
                }
                </div>
                <div className="col-4">
                {this.determineDisabled(3) ? <button className="levelButton disabled" onClick={x => this.toastButton(2)}>Level 3</button> :
                    <button className="levelButton enable">
                                <Link
                                    className="link"
                                    to ='/learn/5cad18e0eade2de40405be74'
                                >
                                    Level 3
                                </Link>
                    </button>
                }
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        levelScores: state.scores.thisUser
    }
}

export default connect(mapStateToProps)(CourseLinks);