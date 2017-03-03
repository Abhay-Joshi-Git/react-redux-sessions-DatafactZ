import React from 'react';
import NavLink from './NavLink.js';
import { connect } from 'react-redux';
import { loadEmployees } from '../actions/employees.js';
import uniq from 'lodash/uniq';

class EmployeeList extends React.Component {
    loadEmployees = () => {
        this.props.loadEmployees();
    }

    render() {
        return <div>

            {
                (this.props.departments && this.props.departments.length) ?
                <div>
                    <h4>Department List</h4>
                    <ul>
                        {
                            this.props.departments.map(item => (
                                <li
                                    key={item}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div> : null
            }


            <div >
                <h3 style={{display: 'inline-block'}}>Employees List</h3>

                <NavLink to='employee/new'
                    className='pull-right icon'
                    style={{marginTop: 20, height: 20, width: 10}}
                >
                    <i
                        className='glyphicon glyphicon-plus-sign'
                        style={{color: 'blue'}}
                        onClick={this.addEmployee}
                    >
                    </i>
                </NavLink>

                <span
                    className='pull-right icon'
                    style={{marginTop: 20, height: 20, width: 10}}
                >
                    <i
                        className='glyphicon glyphicon-refresh'
                        style={{color: 'blue'}}
                        onClick={this.loadEmployees}
                    >
                    </i>
                </span>


            </div>

            {
                this.props.loading ? <div style={{cursor: 'progress'}}>
                    loading records....
                </div> :
                <div>

                    <br/>

                    {this.getEmployeeList()}
                </div>

            }

        </div>
    }

    getEmployeeList() {
        //console.log(this.props.employees);
        return this.props.employees.map(
            item => (
                <div
                    key={item.id}
                    className="well well-sm"
                >
                    <NavLink to={'employee/' + item.id}>{item.name}</NavLink>
                </div>
            )
        );
    }
}

const mapStateToPrps = (state) => {
    console.log(state);
    return {
        employees: state.employees,
        departments: state.employees ? uniq(state.employees.map(item => item.department)): null,
        loading: state.httpRequestProgress
    }
};

export default connect(
    mapStateToPrps,
    { loadEmployees }
)(EmployeeList);
