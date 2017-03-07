import React from 'react';
import NavLink from './NavLink.js';
import { connect } from 'react-redux';
import { loadEmployees } from '../actions/employees.js';
import uniq from 'lodash/uniq';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { Well, Alert } from 'react-bootstrap';

class EmployeeList extends React.Component {
    loadEmployees = () => {
        this.props.loadEmployees();
    }

    render() {
        return <div>
            {
                this.props.params.department ?
                <h4>Selected Department - {this.props.params.department}</h4>
                : ((this.props.departments &&
                    this.props.departments.length
                    && !this.props.params.department
                ) ?
                <div>

                    {
                        ! this.props.filterByDeptVisited ?
                        <Alert bsStyle='info'>
                            you can select a department and filter employees for that department
                        </Alert> : null
                    }
                    <h4>Department List</h4>
                    <ul>
                        {
                            this.props.departments.map(item => (
                                <li
                                    key={item}
                                >
                                    <a
                                        onClick={() => {
                                            console.log(this.props.router.location.pathname + '/' + item)
                                            this.props.push(this.props.router.location.pathname + '/' + item)
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div> : null)
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
                <Well bsSize='sm'
                    key={item.id}
                >
                    <NavLink to={'employee/' + item.id}>{item.name}</NavLink>
                </Well>
            )
        );
    }
}

const mapStateToPrps = (state, ownProps) => {
    return {
        employees: ownProps.params.department ?
            state.employees.filter(item =>
                item.department == ownProps.params.department) :
                state.employees,
        departments: ownProps.params.department ?
            [ownProps.params.department] :
            state.employees ? uniq(state.employees.map(item =>
                item.department)) :
                null,
        loading: state.httpRequestProgress,
        filterByDeptVisited: state.filterByDeptVisited
    }
};

export default withRouter(connect(
    mapStateToPrps,
    { loadEmployees, push }
)(EmployeeList));
