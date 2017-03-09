import React from 'react';
import ReactDom from 'react-dom';


const App = () => (
    <div className='container-color'>
        Hello from gulp & company !!
    </div>
);

ReactDom.render(
    <App />,
    document.getElementById('app')
)
