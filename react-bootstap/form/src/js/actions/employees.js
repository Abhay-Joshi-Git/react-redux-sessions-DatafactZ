import * as API from '../APIs/employees.js';

export const loadEmployees = () => (dispatch) => {
    console.log('loading employees ....')
    dispatch({
        type: 'HTTP_REQUEST_START'
    });
    API.loadEmployees().then(data => {
        setTimeout(() => {
            dispatch({
                type: 'LOAD_EMPLOYEE_SUCCESS',
                payload: data
            });
            dispatch({
                type: 'HTTP_REQUEST_END'
            });
        }, 2000)
    });
}

export const addEmployee = (record) => {
    return API.addEmployee(record).then(data => {
        return {
            type: 'ADD_EMPLOYEE_SUCCESS',
            payload: data
        };
    })
}
