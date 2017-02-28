import React from 'react';
import { addEmployee } from '../../actionCreators.js';
import { connect } from 'react-redux';

class Employee extends React.Component {
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

    onDepartmentChange = (e) => {
        this.setState({
            department: e.target.value
        });
    }

    saveRecord = () => {
        this.props.add(this.state);
        this.setState(this.getInitialState());
        this.nameEle.focus();
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (record) => {
      dispatch(addEmployee(record))
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(Employee);
