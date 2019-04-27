import {
    fetchLevelSuccess,
    FETCH_LEVEL_SUCCESS,
    fetchLevelError,
    FETCH_LEVEL_ERROR
} from './levels';

describe('fetchLevelSuccess', () => {
    it('should return the action', () => {
        const data = { test: 'test'};
        const action = fetchLevelSuccess(data);
        expect(action.type).toEqual(FETCH_LEVEL_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('fetchLevelError', () => {
    it('should return the action', () => {
        const error = 'ERROR!!!';
        const action = fetchLevelError(error);
        expect(action.type).toEqual(FETCH_LEVEL_ERROR);
        expect(action.error).toEqual(error);
    });
});