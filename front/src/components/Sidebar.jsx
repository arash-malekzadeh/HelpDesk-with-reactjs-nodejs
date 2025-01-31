import React from "react";
import clsx from "clsx";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";

import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setOpenSidebar } from "../redux/slices/authSlice";
const linkData = [
  { label: "داشبورد", link: "dashboard", icon: <MdDashboard /> },
  { label: "اقدامات", link: "tasks", icon: <FaTasks /> },
  { label: "تکمیل شده", link: "completed/completed", icon: <MdTaskAlt /> },
  {
    label: "در دست اقدام",
    link: "in-progress/in progress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "در انتظار اقدام",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "تیم",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "آیتم‌های حذف‌شده",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];
const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 7);
  const path = location.pathname.split("/")[1];
  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };
  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-3/4 flex gap-4 p-4 rounded-full items-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-blue-700 text-white py-4" : ""
        )}
      >
        {el.icon}
        <span className="hover:text-[#2564ed]">{el.label}</span>
      </Link>
    );
  };
  return (
    <div className="w-full h-full flex flex-col gap-6 p-5">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black ">TaskMe</span>
      </h1>
      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>
      <div>
        <button className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
          <MdSettings />
          <span>تنظیمات</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
