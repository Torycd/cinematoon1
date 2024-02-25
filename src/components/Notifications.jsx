import { useContext } from "react";

import { CartonnCtx } from "./store/CartoonContext";

const Notifications = () => {
  const { items } = useContext(CartonnCtx);
  let content = (
    <h2 className="text-xl font-bold bg-slate-400 text-white p-4 rounded-xl">
      You dont have any new item of News for you.
    </h2>
  );

  if (items.length > 0) {
    content = (
      <h2 className="text-xl font-bold bg-slate-400 text-white p-4 rounded-xl">
        You have added a new item to your Cart.
      </h2>
    );
  }
  return <div className="h-dvh">{content}</div>;
};

export default Notifications;
