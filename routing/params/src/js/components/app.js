import React from "react";
import { Router, Route, browserHistory, Link, IndexRoute, Redirect } from 'react-router';
import DepartmentList from './Departments.js';
import EmployeeList from './Employees.js';
import Home from './Home.js';
import AppContainer from './appContainer.js';
import Employee from './employee.js';

export default () => (
    <div>
        <Router history={ browserHistory }>
            <Route path='/' component={AppContainer}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path='departments' component={DepartmentList}></Route>
                <Route path='employees' component={EmployeeList}></Route>
                <Route path='employee/:id' component={Employee}></Route>

                <Redirect from='employeeList' to='employees'></Redirect>
                <Route path='/:id' component={() => (
                    <div>
                        <strong>Invalid Route, please check the url!!</strong>
                    </div>
                )}/>
            </Route>
        </Router>
    </div>
);
