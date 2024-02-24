import { useContext } from "react";

import { DUMMY_POPULAR } from "./store/cartoon_product";
import { CartonnCtx } from "./store/CartoonContext";

const Popular = () => {
  const { addCartoon2Cart } = useContext(CartonnCtx);
  return (
    <div>
      <h2 className="text-bold mb-2 text-2xl">Popular</h2>
      <div className="grid gap-3 text-white font-bold md:grid-cols-3 ">
        {DUMMY_POPULAR.map((toon) => (
          <div
            key={toon.id}
            className={toon.style}
            onClick={() => addCartoon2Cart(toon.id)}
          >
            <img src={toon.image} className="rounded-md" alt="#" />
            <h2 className="mt-2">{toon.title}</h2>
            <h2>{toon.genre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
