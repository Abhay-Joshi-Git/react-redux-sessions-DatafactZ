import React from "react";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDefaultState();
    }

    getDefaultState() {
        return {
            name: '',
            department: ''//'Marketing',
        }
    }

    render() {
        return (
            <div>
                <h3> Employee Creation </h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name : </label>
                    <input name='name'
                        value={this.state.name}
                        onChange={this.onNameChange}
                        />
                    <br/>
                    <label htmlFor='department'>Department : </label>
                    <input name='department'
                        value={this.state.department}
                        //disabled={true}
                        onChange={this.onDepartmentChange}
                        />
                    <br/>
                    <br/>
                    <input type='submit'></input>
                </form>

                <br/>
                <br/>
                <br/>
                    {/*<div>
                        <pre>
                            {JSON.stringify(this.state)}
                        </pre>
                    </div>*/}

            </div>
        );
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onDepartmentChange = (e) => {
        this.setState({
            department: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state);
        this.setState(this.getDefaultState());
        e.preventDefault();
    }
}
