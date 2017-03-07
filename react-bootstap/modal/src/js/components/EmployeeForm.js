import React from 'react';
import { addEmployee } from '../actions/employees.js';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import ConfimModal from './lib/confirmationModal.js';

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
        if (!this.state.isSaved) {
            this.setState({
                routeToLeave: nextLocation
            })
            return false;
        }
    }


    getInitialState() {
        return {
            name: '',
            department: '',
            isSaved: true,
            serverError: '',
            routeToLeave: null
        }
    }

    render() {
        return (
            <div>
                <h3>Employee Form</h3>
                <div style={{maringBottom : 20}}>
                    {
                        this.state.serverError ?
                        <div className='alert alert-warning'>
                            Error while creating employee - {this.state.serverError}
                        </div> : null

                    }
                </div>

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

                <Button bsStyle='primary'
                    onClick={this.saveRecord}
                >
                Submit
                </Button>

                <br />
                <br />

                <ConfimModal
                    show={!!this.state.routeToLeave}
                    cancel={this.cancelRouting}
                    execute={this.gotoRouteToLeave}
                >
                    <strong>Unsaved Work!!</strong> Are you sure that you want to leave?
                </ConfimModal>
            </div>
        );
    }

    cancelRouting = () => {
        this.setState({
            routeToLeave: null
        });
        this.nameEle.focus();
    }

    gotoRouteToLeave = () => {
        let routeToLeave = this.state.routeToLeave;
        this.setState({
            isSaved: true,
            routeToLeave: null
        }, () => {
            this.props.router.push(routeToLeave);
        })
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
