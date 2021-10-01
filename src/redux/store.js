import calcReducer from './caclReducer'
import { combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({calcReducer})

const store = createStore(reducers, composeWithDevTools())

export default store
