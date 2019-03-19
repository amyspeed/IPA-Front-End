import {
    FETCH_LESSONS_SUCCESS,
    FETCH_LESSONS_ERROR
} from '../actions/lessons';

const initialState = {
    data: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_LESSONS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_LESSONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}