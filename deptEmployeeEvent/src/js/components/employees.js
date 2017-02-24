import React from "react";

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    render() {
        return (
            <div>
                <h4> List of Employees </h4>
                {this.getEmployeeList()}
            </div>
        )
    }

    getEmployeeList() {
        if (this.props.employees && this.props.employees.length) {
            return this.props.employees.map(employee => {
                return (
                    <div className="well well-sm"
                        key={employee.id}
                        onClick={() => this.props.deleteItem ? this.props.deleteItem(employee.id) : null}
                    >
                        <strong>Id</strong> - {employee.id}
                        <br />
                        <strong>Name</strong> - {employee.name}
                    </div>
                );
            })
        } else {
            return <div>
                No one works here!!
            </div>
        }
    }
}
