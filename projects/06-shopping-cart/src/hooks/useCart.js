import { useContext, useReducer } from "react";
import { CartContext } from "../contexts/cart";
import { cartInitialState, cartReducer } from "../reducers/cart";

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  const clearCart = () =>
    dispatch({
      type: "CLEAR_CART",
    });

  return {state, addToCart, removeFromCart, clearCart}
}