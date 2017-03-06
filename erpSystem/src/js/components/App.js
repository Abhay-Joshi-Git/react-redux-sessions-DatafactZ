import React from 'react';
import NavLink from './lib/NavLink.js';

class App extends React.Component {
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
                <NavLink to='/purchase' onlyActiveOnIndex={true}>Purchase</NavLink>
                <NavLink to='/produce' onlyActiveOnIndex={true}>Produce</NavLink>
                <NavLink to='/sales' onlyActiveOnIndex={true}>Sales</NavLink>
            </nav>
        )
    }
}

export default App;
