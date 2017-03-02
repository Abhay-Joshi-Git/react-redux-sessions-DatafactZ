import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import DepartmentList from './Departments.js';
import EmployeeList from './Employees.js';
import Home from './Home.js';

export default () => (
    <div>
        <Router history={ hashHistory }>
            <Route path='/' component={Home}></Route>
            <Route path='/departments' component={DepartmentList}></Route>
            <Route path='/employees' component={EmployeeList}></Route>
        </Router>
    </div>
);
