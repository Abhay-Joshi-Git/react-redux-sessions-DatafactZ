import React from "react";

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

var list = [new Employee('John', 1), new Employee('Jane', 2)];

function getEmployees() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(list), 2000);
    })
}

export default class App extends React.Component {
    render() {
        return (
            <div>
                <EmployeeList  employees={list}/>
            </div>
        );
    }
}

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        getEmployees().then(data => {
            this.setState({
                employees: data
            })
        });
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
        if (this.state.employees && this.state.employees.length) {
            return this.state.employees.map(employee => {
                return (
                    <div className="well well-sm"
                        key={employee.id}
                    >
                        id - {employee.id}
                        <br />
                        name - {employee.name}
                    </div>
                );
            })
        } else {
            return <div>loading....</div>
        }
    }
}
