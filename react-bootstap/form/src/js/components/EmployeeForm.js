import React from 'react';
import { addEmployee } from '../actions/employees.js';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { withRouter } from 'react-router';
import { Alert, Row, Col, Grid, ControlLabel, FormControl,
    Form, FormGroup, Button, HelpBlock } from 'react-bootstrap';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    componentDidMount() {
        console.log(this.props.router);
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    }

    routerWillLeave = (nextLocation) => {
        // return false to prevent a transition w/o prompting the user,
        // or return a string to allow the user to decide:
        if (!this.state.isSaved)
          return 'Unsaved form!! Are you sure you want to leave?'
    }

    getInitialState() {
        return {
            name: null,
            department: '',
            isSaved: true,
            serverError: ''
        }
    }

    render() {
        return (
            <div>
                <h3>Employee Form</h3>
                <div style={{maringBottom : 20}}>
                    {
                        this.state.serverError ?
                        <Alert bsStyle='warning'>
                            Error while creating employee - {this.state.serverError}
                        </Alert> : null

                    }
                </div>

                <Form horizontal>
                    <FormGroup
                        validationState={this.getNameValidationState()}
                    >
                        <Col componentClass={ControlLabel} sm={3}>
                            Name :
                        </Col>
                        <Col sm={6}>
                            <FormControl.Feedback/>
                            <FormControl
                                name='name'
                                placeholder='Employee Name'
                                required={true}
                                value={this.state.name}
                                onChange={this.onNameChange}
                                ref={node => this.nameEle = node}
                            />
                        <HelpBlock>{this.getNameValidationError()}</HelpBlock>
                        </Col>

                    </FormGroup>

                    <input
                       placeholder='Department Name'
                       className='form-control'
                       value={this.state.department}
                       onChange={this.onDepartmentChange}
                   />

                   <br/>

                    <FormGroup>
                      <Col smOffset={3} sm={10}>
                        <Button
                            onClick={this.saveRecord}
                            type="submit"
                            bsStyle="primary"
                        >
                          Save
                        </Button>
                      </Col>
                    </FormGroup>
                </Form>

            </div>
        );
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value,
            isSaved: false
        });
    }

    onDepartmentChange = (e) => {
        this.setState({
            department: e.target.value,
            isSaved: false
        });
    }

    getNameValidationState() {
        if (this.state.name == null) {
            return null
        }
        return this.state.name? 'success': 'error'
    }

    getNameValidationError() {
        if (this.getNameValidationState() == null) {
            return ''
        }
        return this.state.name? '' : 'Name is required'
    }

    saveRecord = () => {
        var {name, department} = this.state;
        this.props.add({name, department}).then(() => {
            this.setState({
                isSaved: true
            }, () => {
                this.props.router.push('/employees');
            });
            // this.setState(this.getInitialState());
            // this.nameEle.focus();
        }).catch((error) => {
            this.setState({
                serverError: error.message
            });
            console.log('error while adding record ... ' + error);
        })
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    add: (record) => {
        return addEmployee(record).then((action) => {
            dispatch(action);
        });
    }
  }
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(Employee));
