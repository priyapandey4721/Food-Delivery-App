export const getAllMenusReducer = (state = { menus: [] }, action) => {
  switch (action.type) {
    case "GET_MENUS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_MENUS_SUCCESS":
      return {
        loading: false,
        menus: action.payload,
      };
    case "GET_MENUS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
