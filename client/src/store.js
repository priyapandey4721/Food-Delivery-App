import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getAllMenusReducer } from "./reducers/MenuReducers";
import { cartReducer } from "./reducers/CartReducers";
import { composeWithDevTools } from "redux-devtools-extension";
const finalReducer = combineReducers({
  getAllMenusReducer: getAllMenusReducer,
  cartReducer: cartReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
