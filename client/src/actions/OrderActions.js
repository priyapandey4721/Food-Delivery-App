import axios from "axios";
import * as API from "../config/Myservices";

export const placeOrder=(token,grandtotal)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    const email = sessionStorage.getItem("user");
    const cartItems = getState().cartReducer.cartItems
    try {
        const  response = await axios.post("http://localhost:8000/api/fooddelivery/placeorders",{token,grandtotal,email,cartItems});
        dispatch({type:"PLACE_ORDER_SUCCESS"})
        console.log(response)
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILED"})
        console.log(error)
    }
}