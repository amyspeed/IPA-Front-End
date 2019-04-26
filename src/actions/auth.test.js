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
    login,
    refreshAuthToken
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
    const action = clearAuth();
    expect(action.type).toEqual(CLEAR_AUTH);
});

describe('authRequest', () => {
    const action = authRequest();
    expect(action.type).toEqual(AUTH_REQUEST);
});

describe('authSuccess', () => {
    const currentUser = 'userTest';
    const action = authSuccess(currentUser);
    expect(action.type).toEqual(AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
});

describe('authError', () => {
    const error = 'ERROR MESSAGE!!'
    const action = authError(error);
    expect(action.type).toEqual(AUTH_ERROR);
    expect(action.error).toEqual(error);
});

// describe('login', () => {
//     it('should return the action', () => {
//         const username = 'userTest';
//         const password = 'paswordTest'
//         const action = login(username, password);
//         expect(action.type).toEqual(AUTH_SUCCESS);
//     });
// });

// describe('refreshAuthToken', () {

// })

