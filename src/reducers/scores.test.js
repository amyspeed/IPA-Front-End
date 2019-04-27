import reducer from './scores';

describe('reducer', () => {
    it('should return the initial state', () => {
        const state = reducer(undefined, {});
        expect(state).toEqual({
            allUsers: {},
            thisUser: {},
            error: null
        });
    });
});