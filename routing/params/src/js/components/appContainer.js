import React from 'react';
import { Link } from 'react-router';

export default class AppContainer extends React.Component {
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
                <Link to='/'>Home</Link>
                <Link to='/departments'>Departments</Link>
                <Link to='/employees'>Employees</Link>
            </nav>
        )
    }
}

//onlyActiveOnIndex={true}
