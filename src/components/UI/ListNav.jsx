import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { FaEye, FaBell, FaFolder } from "react-icons/fa";

// className={({isActive}) => isActive ? "p-4 my-5 font-bold flex bg-slate-100" : "p-4 my-5 font-bold flex hover:bg-slate-100"}
const ListNav = ({ children }) => {
  return (
    <ul className="uppercase p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "p-4 my-5 font-bold flex bg-slate-100"
            : "p-4 my-5 font-bold flex hover:bg-slate-100"
        }
        end
      >
        <div className="p-2 mr-2 bg-blue text-white rounded-sm bg-gradient-to-tr from-[#ff8638] to-[#f8caab]">
          <FaEye size={20} />
        </div>{" "}
        <span className="my-auto">Discover</span>
      </NavLink>

      <NavLink
        to="/Collections"
        className={({ isActive }) =>
          isActive
            ? "p-4 my-5 font-bold flex bg-slate-100"
            : "p-4 my-5 font-bold flex hover:bg-slate-100"
        }
      >
        <div className="p-2 mr-2 bg-blue text-white rounded-sm bg-gradient-to-tr from-[#5698f3] to-[#b2cef5]">
          <FaFolder size={20} />
        </div>{" "}
        <span className="my-auto">My Collections</span>
      </NavLink>
      <NavLink
      to="/Notifications"
        className={({ isActive }) =>
          isActive
            ? "p-4 my-5 font-bold flex bg-slate-100"
            : "p-4 my-5 font-bold flex hover:bg-slate-100"
        }
        
      >
        <div className="p-2 mr-2 bg-blue text-white rounded-sm  bg-gradient-to-tr from-[#2cb758] to-[#9cf9ba]">
          <FaBell size={20} />
        </div>{" "}
        <span className="my-auto">Notifications</span>
      </NavLink>
      {children}
    </ul>
  );
};

ListNav.propTypes = {
  children: PropTypes.node,
};

export default ListNav;
