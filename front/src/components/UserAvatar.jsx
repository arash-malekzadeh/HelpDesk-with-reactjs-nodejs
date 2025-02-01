import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaUser, FaUserLock } from "react-icons/fa";
import { IoLockClosed, IoLogOutOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitials } from "../utils";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    console.log("logot");
  };
  return (
    <div>
      <Menu as="div" className=" !px-2 relative inline-block text-left">
        <div>
          <MenuButton className="w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center rounded-full bg-blue-600">
            <span className="text-white font-semibold">
              {getInitials(user?.name)}
            </span>
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute left-1 mt-2 w-46 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-xl ring-1 ring-black/5 focus:outline-none">
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setOpen(true)}
                  className={`${
                    active ? "bg-gray-100" : ""
                  } text-gray-700 group flex w-full items-center rounded-md !px-2 !py-2 text-base`}
                >
                  <FaUser className="!ml-2 " aria-hidden="true" />
                  پروفایل
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <button
                  onClick={() => setOpenPassword(true)}
                  className={`${
                    active ? "bg-gray-100 dark:bg-gray-700" : ""
                  } text-gray-700 dark:text-gray-300 group flex w-full items-center rounded-md !px-2 !py-2 text-base`}
                >
                  <IoLockClosed className="!ml-2" aria-hidden="true" />
                  تغییر کلمه عبور{" "}
                </button>
              )}
            </MenuItem>

            <MenuItem>
              {({ active }) => (
                <button
                  onClick={logoutHandler}
                  className={`${
                    active ? "bg-red-50" : ""
                  } text-red-600 group flex w-full items-center rounded-md !px-2 !py-2 text-base`}
                >
                  <IoLogOutOutline className="ml-2 " aria-hidden="true" />
                  خروج
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAvatar;
