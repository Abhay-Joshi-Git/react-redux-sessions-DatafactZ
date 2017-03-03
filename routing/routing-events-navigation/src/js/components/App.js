import React from 'react';
import NavLink from './NavLink.js';
import { connect } from 'react-redux';
import { loadEmployees } from '../actions/employees.js';

class App extends React.Component {
    componentDidMount() {
        this.props.loadEmployees();
    }

    render() {
        return (
            <div>
                {this.getLinks()}
                <br />
                <br />

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

    getLinks() {
        return (
            <nav>
                <NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink>
                <NavLink to='/employees'>Employees</NavLink>
            </nav>
        )
    }
}

export default connect(
    null,
    { loadEmployees }
)(App);
