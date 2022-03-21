export const addToCart = (menu) => dispatch=>{
    var cartItem = {
        Name : item.Name,
        _id: item._id,
        Image : item.Image,
        Quantity : Quantity,
        Prices : item.Prices,
        Price : item.Prices[0]*Quantity
    }
    dispatch({type:"ADD_TO_CART",payload:cartItem})
}