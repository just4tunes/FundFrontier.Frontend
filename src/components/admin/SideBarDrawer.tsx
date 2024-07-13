import { LuHome } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { useState } from 'react';

const SideBarDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, SetSelected] = useState("dashboard");

  return (
    <>
      <Drawer opened={opened} onClose={close}>
        <menu className={`px-6 ${!open ? "pt-32" : ""}`}>
          <ul className="flex flex-col gap-5 text-[#2a3547]">
            <h5 className="text-[15px] leading-[26px]">
              Menu
            </h5>
            <ul className="flex flex-col gap-5 font-medium">
              <li
                onClick={() => SetSelected("dashboard")}
                className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "dashboard" ? "text-blue-500" : ""}`}
              >
                <LuHome size={15} />
                <p className="text-lg transition-scale ease-in duration-50 scale-90">Dashboard</p>
              </li>
              <Link to="/admin-dashboard/manage-users"
                onClick={() => SetSelected("manage")}
                className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "manage" ? "text-blue-500" : ""}`}
              >
                <FiUsers size={15} />
                <p className="text-lg transition-scale ease-in duration-50 scale-90">Manage Users</p>
              </Link>
              <li
                onClick={() => SetSelected("withdrawals")}
                className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "withdrawals" ? "text-blue-500" : ""}`}
              >
                <IoMdCard size={15} />
                <p className="text-lg transition-scale ease-in duration-50 scale-90">Pending Withdrawals</p>
              </li>
            </ul>
            <h5 className="text-[15px] leading-[26px]">
              Elements
            </h5>
            <ul className="flex flex-col gap-5 font-medium">
              <li
                onClick={() => {
                  SetSelected("settings")
                }}
                className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "settings" ? "text-blue-500" : ""}`}
              >
                <IoSettingsOutline size={15} />
                <p className="text-lg transition-scale ease-in duration-50 scale-90">Settings</p>
              </li>
              <li
                onClick={() => SetSelected("activity")}
                className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "activity" ? "text-blue-500" : ""}`}
              >
                <FiActivity size={15} />
                <p className="text-lg transition-scale ease-in duration-50 scale-90">Activity Logs</p>
              </li>
              <li
                onClick={() => SetSelected("logout")}
                className={`flex items-center align-middle gap-5 cursor-pointer hover:text-blue-500 ${selected === "logout" ? "text-blue-500" : ""}`}
              >
                <FaPowerOff size={15} />
                <p className="text-lg transition-scale ease-in duration-50 scale-90">Logout</p>
              </li>
            </ul>
          </ul>
        </menu>
      </Drawer>

      <RxHamburgerMenu
        size={20}
        className="sm:hidden block cursor-pointer"
        onClick={open}
      />
    </>
  );
}

export default SideBarDrawer;