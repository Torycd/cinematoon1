import { useContext } from "react";

import { CartonnCtx } from "./store/CartoonContext";

const Collections = () => {
  const { items } = useContext(CartonnCtx);
  return (
    <div className="h-[100%] flex flex-col gap-9">
      {items.map((itm) => (
        <div key={itm.id} className={itm.style}>
          <img src={itm.image} className="w-[800px] h-auto" />
          <h2>{itm.title}</h2>
          <p>
            <span>{itm.quantity}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Collections;
