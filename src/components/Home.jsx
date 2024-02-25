import SIdeBar from "./SIdeBar";
import { Outlet } from "react-router-dom";
import { CartoonContextProvider } from "./store/CartoonContext";

const Home = () => {
  return (
    <CartoonContextProvider>
      <div className="grid gap-4 bg-slate-50 grid-cols-10 w-full">
        <SIdeBar />
        <Outlet />
      </div>
    </CartoonContextProvider>
  );
};

export default Home;
