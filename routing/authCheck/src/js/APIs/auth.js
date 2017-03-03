export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        if (password === 'admin') {

        }
        setTimeout(() => (password === 'admin') ?
            resolve('login successful!') :
            reject('invalid credentials! please try again.'),
        2000);
    });
}
