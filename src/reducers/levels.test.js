import reducer from './levels';

describe('reducer', () => {
    it('should return the initial state', () => {
        const state = reducer(undefined, {});
        expect(state).toEqual({
            data: [],
            error: null
        });
    });
});