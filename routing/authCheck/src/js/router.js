import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Login from './components/Login.js';
import EmployeeList from './components/Employees.js';
import Home from './components/Home.js';
import App from './components/App.js';
import Employee from './components/Employee.js';
import EmployeeForm from './components/EmployeeForm.js';
import { connect } from 'react-redux';

class RouterComp extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Router history={ browserHistory }>
                <Route path='/login' component={Login}></Route>
                <Route path='/' component={App} onEnter={this.requireAuth}>
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
    }

    requireAuth = (nextState, replace) => {
        if (!this.props.loggedIn) {
            replace('/login');
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(
    mapStateToProps
)(RouterComp)
