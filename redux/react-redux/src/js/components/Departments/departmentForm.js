import React from 'react';
import store from '../store.js';
import { addDepartment } from '../actionCreators.js';

export default class DepartmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            name: '',
            head: ''
        }
    }

    render() {
        return (
            <div>
                <h3>Department Form</h3>
                <input
                    placeholder='Department Name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onNameChange}
                    ref={node => this.nameEle = node}
                />
                <br />

                <input
                    placeholder='HOD'
                    className='form-control'
                    value={this.state.head}
                    onChange={this.onHeadChange}
                />

                <br />
                <br />

                <button
                    onClick={this.saveRecord}
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

    onHeadChange = (e) => {
        this.setState({
            head: e.target.value
        });
    }

    saveRecord = () => {
        store.dispatch(addDepartment(this.state));
        this.setState(this.getInitialState());
        this.nameEle.focus();
    }
}
