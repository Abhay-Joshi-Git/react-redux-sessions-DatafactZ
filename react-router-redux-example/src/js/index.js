import React from "react";
import ReactDom from "react-dom";
import Router from './router.js';
import { configureStore } from './store.js';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}/>
    </Provider>,

    document.getElementById('app')
);
