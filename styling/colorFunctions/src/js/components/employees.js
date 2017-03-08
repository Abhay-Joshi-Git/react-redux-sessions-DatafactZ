import React from "react";

export default class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            loading: false
        };
    }

    componentDidMount() {
        this.setDept(this.props.deptName);
    }

    setDept(deptName) {
        this.setState({
            loading: true
        });
        getEmployeesByDept(deptName).then(data => {
            this.setState({
                employees: data,
                loading: false
            });
        });
    }

    componentWillReceiveProps(netProps) {
        console.log('in component will receive props...', netProps.deptName);
        if (netProps.deptName !== this.props.deptName) {
            this.setDept(netProps.deptName);
        }
    }

    render() {
        return (
            <div className='employee'>
                <h4> List of Employees </h4>
                {this.state.loading ? <div>loading...</div> : this.getEmployeeList()}
            </div>
        )
    }

    getEmployeeList() {
        if (this.state.employees && this.state.employees.length) {
            return this.state.employees.map(employee => {
                return (
                    <div className="well well-sm list-item"
                        key={employee.id}
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


var list = [
    {
        id: 1,
        name: 'Kane',
        deptName: 'Marketing'
    },
    {
        id: 2,
        name: 'Kerry',
        deptName: 'Marketing'
    },
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
];

function getEmployeesByDept(deptName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(list.filter(item => {
                return deptName? item.deptName === deptName : true
            })), 2000);
    })
}
