import axios from 'axios';

export const loadEmployees = () => {
    return axios.get('http://localhost:3000/employees')
        .then(response => response.data)
}

export const addEmployee = (record) => {
    return axios.post('http://localhost:3000/employee', record).then(response => response.data)
}
