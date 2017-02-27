import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <RequiredTextInput name='name'></RequiredTextInput>
                    <br/>

                    <RequiredTextInputFunc name='id' required={true}></RequiredTextInputFunc>

                    <br/>
                    <br/>

                    <input type='submit'></input>
                </form>

                <br />
                <Emp id={2} name='Ab'></Emp>

            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
    }
}

class RequiredTextInput extends React.Component {
    render() {
        return <input required={true} type='text' {...this.props}/>
    }
}

const RequiredTextInputFunc = (props) => {
    return <input required={true} type='text' {...props}/>
}

const Emp = (props) => {
    return <div>
        <div>id - { props.id }</div>
        <div>name - { props.name }</div>
    </div>
}
