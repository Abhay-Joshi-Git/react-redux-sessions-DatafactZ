import * as API from '../APIs/employees.js';

export const loadEmployees = () => (dispatch) => {
    API.loadEmployees().then(data => {
        dispatch({
            type: 'LOAD_EMPLOYEE_SUCCESS',
            payload: data
        });
    });
}

export const addEmployee = (record) => (dispatch) => {
    API.addEmployee(record).then(data => {
        dispatch({
            type: 'ADD_EMPLOYEE_SUCCESS',
            payload: data
        });
    })
}
