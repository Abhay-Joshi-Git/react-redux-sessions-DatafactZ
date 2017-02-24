import React from "react";

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

var list = [new Employee('John', 1), new Employee('Jane', 2)];

export default class App extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Hello {this.props.name} !!

                <EmployeeList employees={list}/>
            </div>
        );
    }
}

App.defaulProps = {
    name: 'Admin'
}

class EmployeeList extends React.Component {
    render() {
        return (
            <div>
                <h4> List of Employees </h4>
                {this.getEmployeeList()}
            </div>
        )
    }

    getEmployeeList() {
        return this.props.employees ? this.props.employees.map(employee => {
            return (
                <div className="well well-sm"
                    key={employee.id}
                >
                    id - {employee.id}
                    <br />
                    name - {employee.name}
                </div>
            );
        }) : null
    }
}

EmployeeList.propTypes = {
    employees: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Employee)).isRequired
}
