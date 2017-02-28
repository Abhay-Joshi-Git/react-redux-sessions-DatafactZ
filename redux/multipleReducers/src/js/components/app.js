import React from 'react';
import EmployeeList from './employeeList.js';
import EmployeeForm from './employeeForm.js';
import DepartmentList from './DepartmentList.js';
import DepartmentForm from './departmentForm.js';

export default class App extends React.Component {
    render () {
        return (
            <div className='row'>
                <div className='well col-sm-12'>
                    <div className='col-sm-4'>
                        <DepartmentList />
                    </div>
                    <div className='col-sm-4'>
                        <DepartmentForm />
                    </div>
                </div>
                <br/>
                <br/>
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
