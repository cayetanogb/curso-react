import { createContext } from "react";
import { useCartReducer } from "../hooks/useCart";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const {state, addToCart, removeFromCart, clearCart} = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
