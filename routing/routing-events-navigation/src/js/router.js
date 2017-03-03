import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import EmployeeList from './components/Employees.js';
import Home from './components/Home.js';
import App from './components/App.js';
import Employee from './components/Employee.js';
import EmployeeForm from './components/EmployeeForm.js';

export default () => (
    <Router history={ browserHistory }>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='employees' component={EmployeeList}></Route>
            <Route path='employee/new' component={EmployeeForm}></Route>
            <Route path='employee/:id' component={Employee}></Route>
            <Route path='/:id' component={() => (
                <div>
                    <strong>Invalid Route, please check the url!!</strong>
                </div>
            )}/>
        </Route>
    </Router>
)
