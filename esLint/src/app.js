import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    handleClick () {
        //console.log(this.props);
    }

    render () {
        return (
            <div className='container-color'
                onClick={this.handleClick}
            >
                Hello from gulp & company !! es6
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)
