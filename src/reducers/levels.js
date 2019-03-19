import {
    FETCH_LEVELS_SUCCESS,
    FETCH_LEVELS_ERROR
} from '../actions/levels';

const initialState = {
    data: {},
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_LEVELS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_LEVELS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}