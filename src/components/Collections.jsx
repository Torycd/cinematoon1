import { useContext } from "react";

import { CartonnCtx } from "./store/CartoonContext";

const Collections = () => {
  const { items } = useContext(CartonnCtx);
  return (
    <div className="h-dvh grid grid-cols-2 gap-9">
      <div>
        {items.map((itm) => (
          <div key={itm.id} className={`${itm.style} h-auto rounded-full`}>
            <img src={itm.image} className="w-auto h-auto" />
            <h2>{itm.title}</h2>
            <p>
              <span>{itm.quantity}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
