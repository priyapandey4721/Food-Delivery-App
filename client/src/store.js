import {combineReducers} from "redux"
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {getAllMenusReducer} from "./reducers/MenuReducers"
import { cartReducer } from "./reducers/CartReducers"
import {composeWithDevTools} from 'redux-devtools-extension'
import { placeOrderReducer } from "./reducers/OrderReducers"
const finalReducer = combineReducers({
    getAllMenusReducer : getAllMenusReducer,
    cartReducer : cartReducer,
    placeOrderReducer:placeOrderReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) :[]
const initialState ={
    cartReducer:{
    cartItems:cartItems
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store