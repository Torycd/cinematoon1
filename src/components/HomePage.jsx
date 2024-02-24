import { useState } from "react";
import { Outlet } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import croodImage from "../assets/croodscartoon.png";
import ListNav from "./UI/ListNav";
// import Popular from "./Popular";
// import Discover from "./Discover";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="h-full col-span-10 md:col-span-6 lg:col-span-7 bg-slate-50 overflow-hidden">
      <div className="flex justify-between">
        <div
          className="border-2 border-[#2cb758] flex md:hidden justify-center p-1 rounded-full w-[40px] h-[40px] sm:w-[50px] my-4 mx-4 sm:m-4 "
          onClick={handleNav}
        >
          <img src={croodImage} className="rounded-full w-full" alt="#" />
        </div>
        <div className="m-4">
          <form className="flex my-auto border-2 border-[#2cb758] p-2 rounded-md  mr-3">
            <input
              type="search"
              placeholder="Search..."
              className="bg-slate-50 mr-2 focus:outline-none"
            />
            <label className="my-auto ">
              <FaSearch className="text-[#2cb758]" size={20} />
            </label>
          </form>
        </div>
      </div>

      {/* the navigation works with state and wont show until when clicked*/}
      <div
        className={
          showNav
            ? "block fixed left-0 top-0 w-[100%] border-r h-full border-r-gray-[#4C51BF] bg-white ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <div className="border-2 border-[#2cb758] flex justify-center p-1 rounded-full w-[100px] my-4  mx-auto">
          <img src={croodImage} className="rounded-full w-full" alt="#" />
        </div>
        <h2 className="font-bold text-center">Croods_Family</h2>
        <ListNav>
          <li
            className="p-4 font-bold flex"
            onClick={() => handleNav(setShowNav(!showNav))}
          >
            Cancel
          </li>
        </ListNav>
      </div>
      {/* content of the Home page */}
      <div className="mx-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
