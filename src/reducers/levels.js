import {
    FETCH_LEVEL_SUCCESS,
    FETCH_LEVEL_ERROR
} from '../actions/levels';

const initialState = {
    data: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_LEVEL_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_LEVEL_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}