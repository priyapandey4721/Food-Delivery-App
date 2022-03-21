import * as API from "../config/Myservices";

export const getAllMenus = () => async (dispatch) => {
  dispatch({ type: "GET_MENUS_REQUEST" });
  try {
    const  response = await API.getMenu();
    console.log(response);
    dispatch({ type: "GET_MENUS_SUCCESS", payload: response.data.products });
  } catch (error) {
    console.log(error)
    dispatch({ type: "GET_MENUS_FAILED", payload: error });
  }
};
