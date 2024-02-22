import { createContext } from "react";

export const CartonnCtx = createContext({
  items: [],
  addCartoon2Cart: () => {},
  deleteCartoon: () => {},
});
