import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home.js';
import App from './components/App.js';
import PurchaseFloor from './components/purchase.js';
import ProductionFloor from './components/production.js';
import Sales from './components/sales.js';

export default (props) => (
    <Router history={ props.history }>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='purchase' component={PurchaseFloor}></Route>
            <Route path='produce' component={ProductionFloor}></Route>
            <Route path='sales' component={Sales}></Route>
            <Route path='/:id' component={() => (
                <div>
                    <strong>Invalid Route, please check the url!!</strong>
                </div>
            )}/>
        </Route>
    </Router>
)
