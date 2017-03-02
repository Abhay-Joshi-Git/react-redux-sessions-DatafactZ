import React from 'react';
import { Link } from 'react-router';

export default () => (
    <div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/departments'>Departments</Link>
            <Link to='/employees'>Employees</Link>
        </nav>
    </div>
)
