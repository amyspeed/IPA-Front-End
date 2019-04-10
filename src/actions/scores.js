import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
//import userId from somewhere

export const FETCH_SCORES_SUCCESS = 'FETCH_SCORES_SUCCESS';
export const fetchScoresSuccess = allUsers => ({
    type: FETCH_SCORES_SUCCESS,
    allUsers
});

export const FETCH_SCORES_ERROR = 'FETCH_SCORES_ERROR';
export const fetchScoresError = error => ({
    type: FETCH_SCORES_ERROR,
    error
});

export const fetchScores = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/scores`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((scores) => dispatch(fetchScoresSuccess(scores)))
        .catch(err => {
            dispatch(fetchScoresError(err));
        });
};

export const fetchScoresById = (userId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/scores/${userId}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((currentUserScores) => dispatch(fetchScoresSuccess(currentUserScores)))
        .catch(err => {
            dispatch(fetchScoresError(err));
        });
}

export const PutScoresByUserId = (userId, putData) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/scores/${userId}`, {
        method: 'PUT',
        headers: { 
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(putData)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((userScores) => dispatch(fetchScoresSuccess(userScores)))
        .catch(err => {
            dispatch(fetchScoresError(err));
        });
};