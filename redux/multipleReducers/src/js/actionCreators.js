const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const ADD_DEPARTMENT = 'ADD_DEPARTMENT';

export function addEmployee(record) {
    return {
        type: ADD_EMPLOYEE,
        item: record
    }
}

export function addDepartment(record) {
    return {
        type: ADD_DEPARTMENT,
        item: record
    }
}
