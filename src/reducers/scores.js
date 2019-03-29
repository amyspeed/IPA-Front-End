import {
    FETCH_SCORES_SUCCESS,
    FETCH_SCORES_ERROR
} from '../actions/scores';

const initialState = {
    allUsers: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_SCORES_SUCCESS) {
        return Object.assign({}, state, {
            allUsers: action.allUsers,
            error: null
        });
    } else if (action.type === FETCH_SCORES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}