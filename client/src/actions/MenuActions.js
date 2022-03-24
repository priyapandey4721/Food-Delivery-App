import * as API from "../config/Myservices";

export const getAllMenus = () => async (dispatch) => {
  dispatch({ type: "GET_MENUS_REQUEST" });
  try {
    const response = await API.getMenu();
    dispatch({ type: "GET_MENUS_SUCCESS", payload: response.data.products });
  } catch (error) {
    dispatch({ type: "GET_MENUS_FAILED", payload: error });
  }
};
