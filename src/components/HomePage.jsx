import { useState } from "react";
// import { FaEye, FaBell, FaFolder } from "react-icons/fa";
import croodImage from "../assets/croodscartoon.png";
import ListNav from "./UI/ListNav";

const HomePage = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="h-screen col-span-10 md:col-span-8 bg-slate-50">
      <div
        className="border-2 border-[#2cb758] flex md:hidden justify-center p-1 rounded-full w-[50px] sm:w-[70px] m-4"
        onClick={handleNav}
      >
        <img src={croodImage} className="rounded-full w-full" alt="#" />
      </div>
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
        <p className="font-bold text-center">Croods_Family</p>
        <ListNav>
          <li
            className="p-4 font-bold flex"
            onClick={() => handleNav(setShowNav(!showNav))}
          >
            Cancel
          </li>
        </ListNav>
      </div>
    </div>
  );
};

export default HomePage;
