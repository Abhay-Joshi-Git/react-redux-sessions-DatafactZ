import React from 'react';
import EmployeeList from './employeeList.js';
import EmployeeForm from './employeeForm.js';
import Dashboard from './dashboard.js';

export default class App extends React.Component {
    render () {
        return (
            <div className='row'>
                <div className='col-sm-3'>
                    <Dashboard />
                </div>
                <div className='col-sm-4'>
                    <EmployeeList />
                </div>
                <div className='col-sm-4'>
                    <EmployeeForm />
                </div>
            </div>
        );
    }
}
