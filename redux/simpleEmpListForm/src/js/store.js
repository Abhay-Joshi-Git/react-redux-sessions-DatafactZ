import * as Redux from 'redux';

var initialState = [];

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return [...state, action.item]
        default:
            return state
    }
}

var store = Redux.createStore(
    reducer
);

export default store;
