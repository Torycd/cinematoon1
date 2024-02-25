import { useContext } from "react";

import { CartonnCtx } from "./store/CartoonContext";

const Collections = () => {
  const { items, updateCartoon, deleteCartoon } = useContext(CartonnCtx);
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
            <div className="flex justify-around mb-2">
              <button
                onClick={() => updateCartoon(itm.id, 1)}
                className=" bg-white w-10 h-10 text-black text-xl rounded-full hover:scale-105 ease-in-out"
              >
                <span className="flex justify-center text-center">
                  <p className="self-center">+</p>
                </span>
              </button>
              <button
                onClick={() => updateCartoon(itm.id, -1)}
                className=" bg-white w-10 h-10 text-black text-xl rounded-full hover:scale-105 ease-in-out"
              >
                <span className="flex justify-center text-center">
                  <p className="self-center">-</p>
                </span>
              </button>
            </div>
            <button onClick={() => deleteCartoon(itm.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
