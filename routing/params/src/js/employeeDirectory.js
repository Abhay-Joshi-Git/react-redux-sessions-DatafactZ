const employees = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Jane'
    }
];

export const getEmployeeIds = () => {
    return employees.map(item => item.id)
}

export const getEmployeeById = (id) => {
    return employees.find(item => item.id == id);
}
