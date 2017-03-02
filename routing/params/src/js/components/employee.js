import React from 'react';
import * as employeeDirectory from '../employeeDirectory.js';

export default class Employee extends React.Component {

    render() {
        var employee = employeeDirectory.getEmployeeById(this.props.params.id)
        return <div>
            Employee Info

            <div className='well well-sm'>
                id  - {employee.id}
                <br/>
                name - {employee.name}
            </div>

        </div>
    }
}
