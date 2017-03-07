const initialState = false;

function httpRequestProgress(state = initialState, action) {
    switch (action.type) {
        case 'HTTP_REQUEST_START':
            return true;
        case 'HTTP_REQUEST_END':
            return false;
        default:
            return state;
    }
}

export default httpRequestProgress;
