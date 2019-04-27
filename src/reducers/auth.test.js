import reducer from './auth';

describe('reducer', () => {
    it('should return the initial state', () => {
        const state = reducer(undefined, {});
        expect(state).toEqual({
            authToken: null,
            currentUser: null,
            loading: false,
            error: null
        });
    });
});