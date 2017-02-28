import React from 'react';
import store from '../store.js';

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                employees: [...store.getState().employees]
            })
        })
    }

    render () {
        return (
            <div>
                <h3>Employee List</h3>

                {this.state.employees.map(item => {
                    return (
                        <div
                            key={item.name}
                            className='well well-sm'
                        >
                            Name: {item.name}
                            <br />
                            Department: {item.department}
                        </div>
                    )
                }) }
            </div>
        );
    }
}
