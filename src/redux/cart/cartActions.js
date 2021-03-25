import { ADD_TO_CART } from "./cartTypes";

export const addToCart = (product) => (dispatch, getState) => {
  const copyCartItems = getState().cart.cartItems.slice();

  let alreadyInCart = false;

  copyCartItems.forEach((item) => {
    if (item._id === product._id) {
      item.count++;
      alreadyInCart = true;
    }
  });

  if (!alreadyInCart) {
    copyCartItems.push({ ...product, count: 1 });
  }
  dispatch({ type: ADD_TO_CART, payload: [...copyCartItems] });
};

export const removeFromCart = (product) => (dispatch, getState) => {
  let copyCartItems = getState().cart.cartItems.slice();
  copyCartItems = copyCartItems.filter((item) => item._id !== product._id);
  dispatch({ type: ADD_TO_CART, payload: [...copyCartItems] });
};
