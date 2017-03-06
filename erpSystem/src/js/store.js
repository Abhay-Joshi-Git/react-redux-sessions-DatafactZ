import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import * as reducers from './reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStore(history, initialState) {

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            promiseMiddleware,
            routerMiddleware(history)
        )        
    )
  );

  return store
}
