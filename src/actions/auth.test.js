import {
    setAuthToken,
    SET_AUTH_TOKEN,
    clearAuth,
    CLEAR_AUTH,
    authRequest,
    AUTH_REQUEST,
    authSuccess,
    AUTH_SUCCESS,
    authError,
    AUTH_ERROR,
} from './auth';

describe('setAuthToken', () => {
    it('should return the action', () => {
        const authToken = 'TestToken123';
        const action = setAuthToken(authToken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
        expect(action.authToken).toEqual(authToken);
    });
});

describe('clearAuth', () => {
    it('should return the action', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    })
});

describe('authRequest', () => {
    it('should return the action', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', () => {
    it('should return the action', () => {
        const currentUser = 'userTest';
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
});

describe('authError', () => {
    it('should return the action', () => {
        const error = 'ERROR MESSAGE!!';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});