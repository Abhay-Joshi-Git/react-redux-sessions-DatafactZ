var React = require('react');
var ReactDom = require('react-dom');


class App extends React.Component {
    render() {
        return (
            <div className='container-color'>
                Hello from gulp & company !! es6 and source maps
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)
