import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
//import lesson Id from somewhere

export const FETCH_LESSONS_SUCCESS = 'FETCH_LESSONS_SUCCESS';
export const fetchLessonsSuccess = data => ({
    type: FETCH_LESSONS_SUCCESS,
    data
});

export const FETCH_LESSONS_ERROR = 'FETCH_LESSONS_ERROR';
export const fetchLessonsError = error => ({
    type: FETCH_LESSONS_ERROR,
    error
});

export const fetchLessons = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/quizzes`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${authToken}`}
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchLessonsSuccess(data)))
        .catch(err => {
            dispatch(fetchLessonsError(err));
        });
};

// export const FetchLessonById = () => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/quizzes/${QuizId}`, {
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