import { useContext } from "react";

import { CartonnCtx } from "./store/CartoonContext";

const Collections = () => {
  const { items, updateCartoon } = useContext(CartonnCtx);
  return (
    <div className="h-dvh">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((itm) => (
          <div key={itm.id} className={`${itm.style} h-auto rounded-full`}>
            <img src={itm.image} className="w-auto h-auto" />
            <h2>{itm.title}</h2>
            <div>
              <span>{itm.quantity}</span>
            </div>
            <div className="flex justify-around">
              <button
                onClick={() => updateCartoon(itm.id, 1)}
                className=" bg-white text-xl md:text-2xl text-black w-[30px] h-[30px] rounded-full hover:scale-105 ease-in-out"
              >
                <span>+</span>
              </button>
              <button
                onClick={() => updateCartoon(itm.id, -1)}
                className=" bg-white text-xl md:text-2xl text-black w-[30px] h-[30px] rounded-full hover:scale-105 ease-in-out"
              >
                <span className="m-auto">-</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
