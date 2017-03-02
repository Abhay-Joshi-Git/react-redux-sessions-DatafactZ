import React from 'react';
import NavLink from './NavLink.js';
import { connect } from 'react-redux';
import { loadEmployees } from '../actions/employees.js';

class EmployeeList extends React.Component {
    componentDidMount() {
        this.props.loadEmployees();
    }

    render() {
        return <div>
            {
                this.props.loading ? <div style={{cursor: 'progress'}}>
                    loading records....
                </div> :
                <div>
                    <div >
                        <h3 style={{display: 'inline-block'}}>Employees List</h3>
                        <NavLink to='employee/new'
                            className='pull-right'
                            style={{marginTop: 20, height: 20, width: 10}}
                        >
                            <i
                                className='glyphicon glyphicon-plus-sign'
                                style={{color: 'blue'}}
                                onClick={this.addEmployee}
                            >
                            </i>
                        </NavLink>
                    </div>

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

const mapStateToPrps = (state) => ({
    employees: state.employees,
    loading: state.httpRequestProgress
});

export default connect(
    mapStateToPrps,
    { loadEmployees }
)(EmployeeList);
