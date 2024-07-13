import { LuHome } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [open, setIsOpen] = useState(false);
  const [selected, SetSelected] = useState("dashboard");

  return (
    <div
      className={`relative min-h-screen transition-all ease-in duration-200 z-50 bg-gray-[#e9e9ef] hidden sm:block ${open ? "w-[255px]" : "w-[80px]"}`}
    >
      {open && (<div className="px-5 pt-7 pb-10 text-center flex items-center align-middle gap-3 text-[#2a3547] font-semibold">
        <FaBitcoin size={30} color='#306ee8' />
        <h1 className="font-bold text-xl">Admin</h1>
      </div>)}

      {/* toggle sidebar open and close */}
      <button
        className="sm:block hidden absolute right-[-16px] top-5 rounded-full bg-blue-500 p-2 text-white"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {open ? <FaAngleLeft size={23} /> : <FaAngleRight size={23} />}
      </button>

      <menu className={`px-6 ${!open ? "pt-32" : ""}`}>
        <ul className="flex flex-col gap-5 text-[#2a3547]">
          {open && (<h5 className="text-[15px] leading-[26px]">
            Menu
          </h5>)}
          <ul className="flex flex-col gap-5 font-medium">
            <li
              onClick={() => SetSelected("dashboard")}
              className={`flex items-center font-semibold align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "dashboard" ? "text-blue-500" : "text-gray-600"}`}
            >
              <LuHome size={open ? 18 : 21} />
              {open && <p className={`text-md ${open ? "transition-scale ease-in duration-50 scale-90" : ""}`}>Dashboard</p>}
            </li>
            <Link to="/admin-dashboard/manage-users"
              onClick={() => SetSelected("manage")}
              className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "manage" ? "text-blue-500" : "text-gray-600"}`}
            >
              <FiUsers size={open ? 18 : 21} />
              {open && <p className={`text-md  font-semibold ${open ? "transition-scale ease-in duration-50 scale-90" : ""}`}>Manage Users</p>}
            </Link>
            <li
              onClick={() => SetSelected("withdrawals")}
              className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "withdrawals" ? "text-blue-500" : "text-gray-600"}`}
            >
              <IoMdCard size={open ? 18 : 21} />
              {open && <p className={`text-md font-semibold ${open ? "transition-scale ease-in duration-50 scale-90" : ""}`}>Pending Withdrawals</p>}
            </li>
          </ul>
          {open && (<h5 className="text-[15px] leading-[26px]">
            Elements
          </h5>)}
          <ul className="flex flex-col gap-5 font-medium">
            <li
              onClick={() => {
                SetSelected("settings")
              }}
              className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "settings" ? "text-blue-500" : "text-gray-600"}`}
            >
              <IoSettingsOutline size={open ? 18 : 21} />
              {open && <p className={`text-md font-semibold ${open ? "transition-scale ease-in duration-50 scale-90" : ""}`}>Settings</p>}
            </li>
            <li
              onClick={() => SetSelected("activity")}
              className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "activity" ? "text-blue-500" : "text-gray-600"}`}
            >
              <FiActivity size={open ? 18 : 21} />
              {open && <p className={`text-md font-semibold ${open ? "transition-scale ease-in duration-50 scale-90" : ""}`}>Activity Logs</p>}
            </li>
            <li
              onClick={() => SetSelected("logout")}
              className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "logout" ? "text-blue-500" : "text-gray-600"}`}
            >
              <FaPowerOff size={open ? 18 : 21} />
              {open && <p className={`text-md font-semibold ${open ? "transition-scale ease-in duration-50 scale-90" : ""}`}>Logout</p>}
            </li>
          </ul>
        </ul>
      </menu>
    </div>
  );
}

export default Sidebar;
