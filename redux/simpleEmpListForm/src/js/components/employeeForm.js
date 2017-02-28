import React from 'react';
import store from '../store.js';

export default class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            name: '',
            department: ''
        }
    }

    render() {
        return (
            <div>
                <h3>Employee Form</h3>
                <input
                    placeholder='Employee Name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onNameChange}
                    ref={node => this.nameEle = node}
                />
                <br />

                <input
                    placeholder='Department Name'
                    className='form-control'
                    value={this.state.department}
                    onChange={this.onDepartmentChange}
                />

                <br />
                <br />

                <button
                    onClick={this.saveRecord.bind(this)}
                    className='btn btn-primary'
                >
                Submit
                </button>

            </div>
        );
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onDepartmentChange = (e) => {
        this.setState({
            department: e.target.value
        });
    }

    saveRecord() {
        store.dispatch({
            type: 'ADD_EMPLOYEE',
            item: this.state
        });
        this.setState(this.getInitialState());
        this.nameEle.focus();
    }
}
