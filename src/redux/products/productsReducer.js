import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  SET_SORT,
  SET_FILTER,
} from "./productTypes";

const initialState = { sort: "", filter: "" };
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, listOfProducts: action.payload.data };

    case SORT_PRODUCTS:
      return { ...state, listOfProducts: action.payload.data };

    case FILTER_PRODUCTS:
      return { ...state, listOfProducts: action.payload.data };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
