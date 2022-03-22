export const addToCart = (item, Quantity) => (dispatch, getState) => {
  var cartItem = {
    Name: item.Name,
    _id: item._id,
    Image: item.Image,
    Quantity: Number(Quantity),
    Price: item.Price,
    TotalPrice: item.Price * Quantity,
  };
  if(cartItem.Quantity > 10){
      alert("Cannot Add More Than 10 Quantities")
  }else{
      if(cartItem.Quantity < 1){
          dispatch({ type: "DELETE_FROM_CART", payload: item });
      }else{
          dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
}
export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
