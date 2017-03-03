const initialState = {
    loggedIn: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return {
                loggedIn: true
            }
        default:
            return state;
    }
};

export default auth;
