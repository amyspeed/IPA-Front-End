import {
    fetchScoresSuccess,
    FETCH_SCORES_SUCCESS,
    fetchIdScoresSuccess,
    FETCH_ID_SCORES_SUCCESS,
    fetchScoresError,
    FETCH_SCORES_ERROR
} from './scores';

describe('fetchScoresSuccess', () => {
    it('should return the action', () => {
        const allUsers = [];
            allUsers[0] = { username: 'bob', totalScore: 5 };
            allUsers[1] = { username: 'jane', totalScore: 3 };
        const action = fetchScoresSuccess(allUsers);
        expect(action.type).toEqual(FETCH_SCORES_SUCCESS);
        expect(action.allUsers).toEqual(allUsers);
    });
});

describe('fetchIdScoresSuccess', () => {
    it('should return the action', () => {
        const thisUser = { username: 'John', totalScore: 10 };
        const action = fetchIdScoresSuccess(thisUser);
        expect(action.type).toEqual(FETCH_ID_SCORES_SUCCESS);
        expect(action.thisUser).toEqual(thisUser);
    });
});

describe('fetchScoresError', () => {
    it('should return the action', () => {
        const error = 'DANGER!!';
        const action = fetchScoresError(error);
        expect(action.type).toEqual(FETCH_SCORES_ERROR);
    });
});