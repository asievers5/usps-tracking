import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';

/* Reducer Imports */
import trackingReducers from './Tracking';

const middleware = applyMiddleware(thunk, logger);
const rootReducer = combineReducers({trackingReducers});

export default createStore(rootReducer, middleware);