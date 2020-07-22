import { combineReducers } from "redux";
import trackingReducers from "./trackingReducers";
import testReducer from './testReducer';

//export default trackingReducers;
export default combineReducers({ trackingReducers, testReducer });