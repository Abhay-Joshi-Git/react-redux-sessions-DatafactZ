import React from 'react';
import store from '../store.js';

export default class DepartmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: []
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                departments: [...store.getState().departments]
            })
        })
    }

    render () {
        return (
            <div>
                <h3>Department List</h3>

                {this.state.departments.map(item => {
                    return (
                        <div
                            key={item.name}
                            className='well well-sm'
                        >
                            Name: {item.name}
                            <br />
                            HOD: {item.head}
                        </div>
                    )
                }) }
            </div>
        );
    }
}
