import { createContext, useState } from "react";
import PropTypes from "prop-types";

import { DUMMMY_DISCOVER, DUMMY_POPULAR } from "./cartoon_product";

export const CartonnCtx = createContext({
  items: [],
  addCartoon2Cart: () => {},
  deleteCartoon: () => {},
  updateCartoon: () => {},
});

export function CartoonContextProvider({ children }) {
  const [scheduleToon, setSheduleToon] = useState({
    items: [],
  });
  const HandlesAddingCartoon = (id) => {
    // handles adding cartoon to the context
    setSheduleToon((prevToon) => {
      const updatedToon = [...prevToon.items];
      const exisitingToonIndex = updatedToon.findIndex(
        (ToonSchdeuled) => ToonSchdeuled.id === id
      );
      const exisitingToonItem = updatedToon[exisitingToonIndex];

      if (exisitingToonItem) {
        // if items alreadys exist in Cart
        const updateToon = {
          ...exisitingToonItem,
          quantity: exisitingToonItem.quantity + 1,
        };
        updatedToon[exisitingToonIndex] = updateToon;
      } else {
        // New Item in the Cart
        const toon1 = DUMMMY_DISCOVER.find((schToon) => schToon.id === id);
        const toon2 = DUMMY_POPULAR.find((schToon) => schToon.id === id);
        if (toon1) {
          updatedToon.push({
            id: toon1.id,
            title: toon1.title,
            image: toon1.image,
            style: toon1.style,
            quantity: 1,
          });
        } else if (toon2) {
          updatedToon.push({
            id: toon2.id,
            title: toon2.title,
            image: toon2.image,
            style: toon2.style,
            quantity: 1,
          });
        }
      }

      return {
        items: updatedToon,
      };
    });
  };
  // console.log(scheduleToon);
  const HanldesDeletingCartoon = (id) => {
    // handles deleting cartoon to the context
    setSheduleToon((prevToon) => {
      const updatedToon = [...prevToon.items];
      const exisitingToonIndex = updatedToon.findIndex(
        (ToonSchdeuled) => ToonSchdeuled.id === id
      );
      updatedToon.splice(exisitingToonIndex, 1)
      
      return {
        items: updatedToon,
      };
      
      // const exisitingToonItem = updatedToon[exisitingToonIndex];
    });
  };
  const HandleUpdateCartoon = (id, amount) => {
    setSheduleToon((prevToon) => {
      const updatedToon = [...prevToon.items];
      const exisitingToonIndex = updatedToon.findIndex(
        (ToonSchdeuled) => ToonSchdeuled.id === id
      );
      const updateToon = {
        ...updatedToon[exisitingToonIndex],
      };
      updateToon.quantity += amount;
      if (updateToon.quantity <= 0) {
        updatedToon.splice(exisitingToonIndex, 1);
      } else {
        updatedToon[exisitingToonIndex] = updateToon;
      }

      return {
        items: updatedToon,
      };
    });
  };
  const cartoon = {
    items: scheduleToon.items,
    addCartoon2Cart: HandlesAddingCartoon,
    deleteCartoon: HanldesDeletingCartoon,
    updateCartoon: HandleUpdateCartoon,
  };

  return <CartonnCtx.Provider value={cartoon}>{children}</CartonnCtx.Provider>;
}

CartoonContextProvider.propTypes = {
  children: PropTypes.node,
};
