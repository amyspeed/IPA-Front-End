import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
// import { SubmissionError } from 'redux-form';

export const FETCH_LEVEL_SUCCESS = 'FETCH_LEVEL_SUCCESS';
export const fetchLevelSuccess = data => ({
    type: FETCH_LEVEL_SUCCESS,
    data
});

export const FETCH_LEVEL_ERROR = 'FETCH_LEVEL_ERROR';
export const fetchLevelError = error => ({
    type: FETCH_LEVEL_ERROR,
    error
});

// export const fetchLevels = () => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/levels`, {
//         method: 'GET',
//         headers: { Authorization: `Bearer ${authToken}`}
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then(({data}) => dispatch(fetchLevelSuccess(data)))
//         .catch(err => {
//             dispatch(fetchLevelError(err));
//         });
// };

export const fetchLevel = (levelId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/levels/${levelId}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchLevelSuccess(data)))
        .catch(err => {
            dispatch(fetchLevelError(err));
        });
}

export const fetchLevel1 = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/levels/5c90a043160522672a83b680`, {
        method: 'Get',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchLevelSuccess(data)))
        .catch(err => {
            dispatch(fetchLevelError(err));
        });
}

export const fetchLevel2 = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/levels/5c90a043160522672a83b681`, {
        method: 'Get',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchLevelSuccess(data)))
        .catch(err => {
            dispatch(fetchLevelError(err));
        });
}

export const fetchLevel3 = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/levels/5c90a043160522672a83b682`, {
        method: 'Get',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchLevelSuccess(data)))
        .catch(err => {
            dispatch(fetchLevelError(err));
        });
}