import * as authAPI from '../APIs/auth.js';

console.log(authAPI, 'd');

export const loginAction = (username, password) => {
    return authAPI.login(username, password).then(response => {
        return {
            type: 'LOG_IN_SUCCESS'
        }
    })
}
