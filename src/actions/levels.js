import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

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

export const fetchLevel = (levelId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/levels/${levelId}`, {
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${authToken}`,
            'Access-Control-Allow-Origin': '*'
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchLevelSuccess(data)))
        .catch(err => {
            dispatch(fetchLevelError(err));
        });
}