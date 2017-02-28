import * as Redux from 'redux';

var initialState = [];

var employees = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return [...state, action.item]
        default:
            return state
    }
}

var departments = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DEPARTMENT':
            return [...state, action.item]
        default:
            return state
    }
}

var reducer = Redux.combineReducers({
    employees,
    departments
});

var store = Redux.createStore(
    reducer
);

export default store;
