import React from "react";
import EmployeeList from  "./employees.js";
import { Grid, Col, Row } from "react-bootstrap";

export default class DepartmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [],
            selectedDept: null
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={5}>
                        <h4> List of Departments </h4>
                        {this.getDeptList()}
                    </Col>
                    {
                        this.state.selectedDept ?
                        <Col sm={5} smOffset={1}>
                            <EmployeeList deptName={this.state.selectedDept} />
                        </Col> : null
                    }
                </Row>
            </Grid>
        )
    }

    componentDidMount() {
        getDepartments().then(data => {
            this.setState({
                departments: data
            })
        });
    }

    getDeptList() {
        if (this.state.departments && this.state.departments.length) {
            return this.state.departments.map(item => {
                return (
                    <div className="well well-sm"
                        key={item.name}
                        onClick={() => this.itemClick(item.name)}
                    >
                        <strong>Name</strong> - {item.name}
                        <br />
                        <strong>Head</strong> - {item.head}
                    </div>
                );
            })
        } else {
            return <div>loading....</div>
        }
    }

    itemClick(deptName) {
        this.setState({
            selectedDept: deptName
        })
    }
}


var list = [
    {
        name: 'Marketing',
        head: 'John'
    },
    {
        name: 'Sales',
        head: 'Jane'
    }
];

function getDepartments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(list), 2000);
    })
}
