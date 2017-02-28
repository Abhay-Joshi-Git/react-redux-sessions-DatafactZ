const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export function addEmployee(record) {
    return {
        type: ADD_EMPLOYEE,
        item: record
    }
}
