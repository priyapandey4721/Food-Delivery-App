import {combineReducers} from "redux"
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {getAllMenusReducer} from "./reducers/MenuReducers"
import {composeWithDevTools} from 'redux-devtools-extension'
const finalReducer = combineReducers({
    getAllMenusReducer : getAllMenusReducer
})
const initialState ={}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store