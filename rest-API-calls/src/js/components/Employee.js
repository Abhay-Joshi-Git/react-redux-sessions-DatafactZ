import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Employee extends React.Component {
    render() {
        return <div>
            {
                this.props.employee ?
                <div>
                    <h3>Employee Info</h3>

                    <div className='well well-sm' style={{marginTop: 10}}>
                        id  - {this.props.employee.id}
                        <br/>
                        name - {this.props.employee.name}
                        <br />
                        department - {this.props.employee.department}
                    </div>

                </div>
                : 'no record present for this id'

            }
        </div>
    }
}

const mapStateToPrps = (state, ownProps) => {
    return {
        employee: state.employees.find(item => item.id === +ownProps.params.id)
    }
};

export default withRouter(connect(
    mapStateToPrps
)(Employee));
