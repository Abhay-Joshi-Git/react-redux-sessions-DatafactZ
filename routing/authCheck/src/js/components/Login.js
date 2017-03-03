import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions/auth.js';
import { withRouter } from 'react-router';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =  this.getInitialState();
    }

    getInitialState() {
        return {
            name: '',
            password: '',
            loginRequestInProgress: false,
            loginError: ''
        }
    }

    render() {
        return (
            <div>

                <h3>Login Form</h3>

                <div style={{maringBottom : 20}}>
                    {
                        this.state.loginError ?
                        <div className='alert alert-warning'>
                            {this.state.loginError}
                        </div> : null
                    }
                </div>


                <input
                    placeholder='user name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onNameChange}
                    ref={node => this.nameEle = node}
                />
                <br />

                <input
                    placeholder='password'
                    type='password'
                    className='form-control'
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />

                <br/>

                <button
                    onClick={this.login}
                    className='btn btn-primary'
                    disabled={this.state.loginRequestInProgress}
                    style={{cursor: this.state.loginRequestInProgress ? 'progress' : 'default'}}
                >
                Log In
                </button>


            </div>
        )
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    login = () => {
        this.setState({
            loginRequestInProgress: true
        });

        this.props.login(this.state.name, this.state.password).then(() => {
            this.setState(this.getInitialState());
            this.props.router.push('/')
        })
        .catch((error) => {
            var errorState = this.getInitialState();
            this.setState({
                ...errorState,
                loginError: error
            })
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        login: (username, password) => {
            return loginAction(username, password).then(action => {
                dispatch(action);
            })
        }
    }
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(LoginForm))
