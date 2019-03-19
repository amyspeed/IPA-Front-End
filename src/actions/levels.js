import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
//import lesson Id from somewhere

export const FETCH_LEVELS_SUCCESS = 'FETCH_LEVELS_SUCCESS';
export const fetchLevelsSuccess = data => ({
    type: FETCH_LEVELS_SUCCESS,
    data
});

export const FETCH_LEVELS_ERROR = 'FETCH_LEVELS_ERROR';
export const fetchLevelsError = error => ({
    type: FETCH_LEVELS_ERROR,
    error
});

export const fetchLevels = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/levels`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchLevelsSuccess(data)))
        .catch(err => {
            dispatch(fetchLevelsError(err));
        });
};

// export const FetchLevelsById = () => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/levels/${LevelId}`, {
//         method: 'Get',
//         headers: { Authorization: `Bearer ${authToken}`}
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then(({data}) => dispatch(fetchLessosSuccess(data)))
//         .catch(err => {
//             dispatch(fetchLessonsError(err));
//         });
// }