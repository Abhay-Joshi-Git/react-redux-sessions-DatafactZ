var React = require('react');
var ReactDom = require('react-dom');

const App = () => (
    <div className='container-color'>
        Hello from gulp & company !! es6
    </div>
);

ReactDom.render(
    <App />,
    document.getElementById('app')
)
