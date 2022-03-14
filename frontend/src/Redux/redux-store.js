import { combineReducers, createStore } from "redux";
import { Reducer } from "./reducer";

let reducers = combineReducers({
    toDo: Reducer
});

let store = createStore(reducers);

window.store = store;

export default store;