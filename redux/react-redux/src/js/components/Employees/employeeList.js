import React from 'react';
import { connect } from 'react-redux';

const employeeList = (props) => {
    return (
        <div>
            <h3>Employee List</h3>
            {props.employees.map(item => {
                return (
                    <div
                        key={item.name}
                        className='well well-sm'
                    >
                        Name: {item.name}
                        <br />
                        Department: {item.department}
                    </div>
                )
            }) }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

export default connect(
    mapStateToProps
)(employeeList);
