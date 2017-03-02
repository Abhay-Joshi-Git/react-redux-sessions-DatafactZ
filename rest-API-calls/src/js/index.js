import React from "react";
import ReactDom from "react-dom";
import Router from './router.js';
import { configureStore } from './store.js';
import { Provider } from 'react-redux';

const store = configureStore({
    employees: [
        {
            id: 1,
            name: 'John'
        }
    ]
});

ReactDom.render(
    <Provider store={store}>
        <Router />
    </Provider>,

    document.getElementById('app')
);
