// import HomePage from "./HomePage"
import SIdeBar from "./SIdeBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid gap-4 bg-slate-50 grid-cols-10 w-full">
      <SIdeBar />
      <Outlet />
    </div>
  );
};

export default Home;
