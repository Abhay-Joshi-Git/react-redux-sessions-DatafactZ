import React from 'react';
import EmployeeList from './Employees/employeeList.js';
import EmployeeForm from './/Employees/employeeForm.js';

export default class App extends React.Component {
    render () {
        return (
            <div className='row'>
                <div className='well col-sm-12'>
                    <div className='col-sm-4'>
                        <EmployeeList />
                    </div>
                    <div className='col-sm-4'>
                        <EmployeeForm />
                    </div>
                </div>
            </div>
        );
    }
}
