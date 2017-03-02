import React from 'react';
import NavLink from './NavLink.js';
import * as employeeDirectory from '../employeeDirectory.js';

export default class EmployeeList extends React.Component {
    render() {
        return <div>
            Employees List
            <br/>

            {this.getEmployeeList()}
        </div>
    }

    getEmployeeList() {
        return employeeDirectory.getEmployeeIds().map(
            id => (
                <div
                    key={id}
                >
                    <NavLink to={'employee/' + id}>{id}</NavLink>
                </div>
            )
        );
    }
}
