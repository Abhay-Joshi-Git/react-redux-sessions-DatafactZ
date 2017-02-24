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
                            <EmployeeList
                                employees={this.state.selectedDept.employees}
                                deleteItem = {this.deleteEmployee}
                            />
                        </div>  : null
                }
            </div>
        )
    }

    deleteEmployee = (id) => {
        var employees = this.state.selectedDept.employees.filter(item => {
            return item.id !== id;
        });
        this.setState({
            selectedDept: {
                ...this.state.selectedDept,
                employees: employees
            }
        });
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
                        onClick={() => this.itemClick(item)}
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

    itemClick(dept) {
        this.setState({
            selectedDept: dept
        })
    }
}


var list = [
    {
        name: 'Marketing',
        head: 'John',
        employees: [
            {
                id: 1,
                name: 'Kane',
                deptName: 'Marketing'
            },
            {
                id: 2,
                name: 'Kerry',
                deptName: 'Marketing'
            }
        ]
    },
    {
        name: 'Sales',
        head: 'Jane',
        employees: [
            {
                id: 11,
                name: 'Clark',
                deptName: 'Sales'
            },
            {
                id: 12,
                name: 'Cody',
                deptName: 'Sales'
            }
        ]
    }
];

function getDepartments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(list), 2000);
    })
}
