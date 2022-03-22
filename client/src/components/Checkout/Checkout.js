import React from 'react'
import {useDispatch} from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { placeOrder } from '../../actions/OrderActions';
function Checkout({grandtotal}) {
  const dispatch = useDispatch();
   function tokenHandler(token){
    console.log(token);
    dispatch(placeOrder(token,grandtotal))
   }
  return (
    <div>
        <StripeCheckout
        amount={grandtotal *100}
        shippingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey ="pk_test_51KVYUUSFTku4JBRSr0qkcLW2OLdVphJNZKcMSLVkubrrXutjvywqTRvZYEZXEcYfjc2t2o6w04NScTQIfQqsgov800x8AHLSRO"
        >
            <button className='button'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout