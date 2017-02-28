import React from 'react';
import store from '../store.js';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeCount: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            var employees = store.getState();
            this.setState({
                employeeCount: employees.length
            })
        })
    }

    render() {
        return (
            <div className='dashboard'>
                <h3>Dashboard </h3>

                <br/>
            
                <label>Employee Count : </label>
                {this.state.employeeCount}
            </div>
        );
    }


}
