import React from "react";
import EmployeeList from  "./employees.js";

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
            <div>
                <div className="col-md-4">
                    <h4> List of Departments </h4>
                    {this.getDeptList()}
                </div>
                {
                    this.state.selectedDept ?
                        <div className="col-md-4">
                            <EmployeeList deptName={this.state.selectedDept} />
                        </div>  : null
                }
            </div>
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
