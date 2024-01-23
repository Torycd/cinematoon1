// import  PropTypes  from "prop-types";
import { FaEye, FaBell, FaFolder } from "react-icons/fa";

const ListNav = ({children}) => {
  return (
    <ul className="uppercase p-4">
          <li className="p-4 font-bold flex">
            <div className="p-2 mr-2 bg-blue text-white rounded-sm bg-gradient-to-tr from-[#ff8638] to-[#f8caab]">
              <FaEye size={20} />
            </div>{" "}
            <span className="my-auto">Discover</span>
          </li>
          <li className="p-4 my-5 font-bold flex">
            <div className="p-2 mr-2 bg-blue text-white rounded-sm bg-gradient-to-tr from-[#5698f3] to-[#b2cef5]">
              <FaFolder size={20} />
            </div>{" "}
            <span className="my-auto">My Collections</span>
          </li>
          <li className="p-4 my-5 font-bold flex">
            <div className="p-2 mr-2 bg-blue text-white rounded-sm  bg-gradient-to-tr from-[#2cb758] to-[#9cf9ba]">
              <FaBell size={20} />
            </div>{" "}
            <span className="my-auto">Notifications</span>
          </li>
          {children}
        </ul>
  )
}

// ListNav.prototype = {
//     children: PropTypes.node.isRequired
// }

export default ListNav