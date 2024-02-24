import { useState } from "react";

import SIdeBar from "./SIdeBar";
import { Outlet } from "react-router-dom";
import { CartonnCtx } from "./store/CartoonContext";
import {
  DUMMMY_DISCOVER,
  DUMMY_POPULAR,
} from "../components/store/cartoon_product.js";

const Home = () => {
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
  console.log(scheduleToon);
  const HanldesDeletingCartoon = () => {
    // handles deleting cartoon to the context
    return;
  };
  const cartoon = {
    items: scheduleToon.items,
    addCartoon2Cart: HandlesAddingCartoon,
    deleteCartoon: HanldesDeletingCartoon,
  };

  return (
    <CartonnCtx.Provider value={cartoon}>
      <div className="grid gap-4 bg-slate-50 grid-cols-10 w-full">
        <SIdeBar />
        <Outlet />
      </div>
    </CartonnCtx.Provider>
  );
};

export default Home;
