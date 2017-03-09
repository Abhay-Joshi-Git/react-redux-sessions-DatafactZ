var React = require('react');
var ReactDom = require('react-dom');

const App = () => (
    <div>
        Hello from gulp & company !! live!!!
    </div>
);

ReactDom.render(
    <App />,
    document.getElementById('app')
)
