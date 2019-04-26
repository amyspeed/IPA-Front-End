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
        toast.info(`🔒 Level Locked! Complete level ${id}!`, {position: "top-center", autoClose: 2000})
    }

    render() {
        return (            
            <div>
                <div className="col-4">
                <Link to ='/learn/5cc25253f0622b826ea0a235'>
                    <button className="levelButton enable">Level 1</button>
                </Link>
                </div>
                <div className="col-4">
                {this.determineDisabled(2) ? <button className="levelButton disabled" onClick={x => this.toastButton(1)}>Level 2</button> :
                    <Link to ='/learn/5cc25253f0622b826ea0a236'>
                        <button className="levelButton enable">Level 2</button>
                    </Link>
                }
                </div>
                <div className="col-4">
                {this.determineDisabled(3) ? <button className="levelButton disabled" onClick={x => this.toastButton(2)}>Level 3</button> :
                    <Link to ='/learn/5cc25253f0622b826ea0a237'>
                        <button className="levelButton enable">Level 3</button>
                    </Link>
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