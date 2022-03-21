import {applyMiddleware, combineReducers, createStore} from "redux";
import { Reducer } from "./reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    toDo: Reducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;