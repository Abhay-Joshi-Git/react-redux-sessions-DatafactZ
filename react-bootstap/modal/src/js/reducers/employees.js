const initialState = [];

function employees(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_EMPLOYEE_SUCCESS':
            return action.payload;
        case 'ADD_EMPLOYEE_SUCCESS':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default employees;
