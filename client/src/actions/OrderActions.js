import * as API from "../config/Myservices";
export const placeOrder=(token,grandtotal)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    const cartItems = getState().cartReducer.cartItems
    try {
        const  response = await API.placeOrder(token,grandtotal,cartItems);
        dispatch({type:"PLACE_ORDER_SUCCESS"})
        console.log(response)
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILED"})
    }
}