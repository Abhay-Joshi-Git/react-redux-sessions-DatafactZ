import React from 'react';
import NavLink from './NavLink.js';

export default class App extends React.Component {
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
