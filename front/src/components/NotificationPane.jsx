import React, { Fragment } from "react";
import { useState } from "react";
import { HiBellAlert } from "react-icons/hi2";
import { BiSolidMessageRounded } from "react-icons/bi";
import moment from "moment";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const data = [
  {
    _id: "65c5bbf3787832cf99f28e6d",
    team: [
      "65c202d4aa62f32ffd1303cc",
      "65c27a0e18c0a1b750ad5cad",
      "65c30b96e639681a13def0b5",
    ],
    text: "یک وظیفه جدید به شما و 2 نفر دیگر اختصاص داده شده است. اولویت وظیفه در سطح عادی تعیین شده، بنابراین بررسی کرده و بر اساس آن اقدام کنید. تاریخ وظیفه: پنج‌شنبه 29 فوریه 2024. سپاسگزاریم!!!",

    task: null,
    notiType: "alert",
    isRead: [],
    createdAt: "2024-02-09T05:45:23.353Z",
    updatedAt: "2024-02-09T05:45:23.353Z",
    __v: 0,
  },
  {
    _id: "65c5f12ab5204a81bde866ab",
    team: [
      "65c202d4aa62f32ffd1303cc",
      "65c30b96e639681a13def0b5",
      "65c317360fd860f958baa08e",
    ],
    text: "یک وظیفه جدید به شما و 2 نفر دیگر اختصاص داده شده است. اولویت وظیفه در سطح عادی تعیین شده، بنابراین بررسی کرده و بر اساس آن اقدام کنید. تاریخ وظیفه: پنج‌شنبه 29 فوریه 2024. سپاسگزاریم!!!",

    task: {
      _id: "65c5f12ab5204a81bde866a9",
      title: "Test task",
    },
    notiType: "alert",
    isRead: [],
    createdAt: "2024-02-09T09:32:26.810Z",
    updatedAt: "2024-02-09T09:32:26.810Z",
    __v: 0,
  },
];
const ICONS = {
  alert: (
    <HiBellAlert className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" />
  ),
  message: (
    <BiSolidMessageRounded className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" />
  ),
};

const NotificationPane = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // const { data, refetch } = useStateUtilizationsQuery();
  // const [markAsRead] = useMarkNotiAsReadMutation();
  const readHandler = (action, data) => {
    // منطق مربوط به خواندن اعلانات
    console.log(action, data);
  };

  const callsToAction = [
    { name: "Cancel", href: "#", icon: "" },
    {
      name: "Mark All Read",
      href: "#",
      icon: "",
      onClick: () => readHandler("all", ""),
    },
  ];
  return (
    <>
      <Popover className="relative">
        <PopoverButton className="inline-flex items-center outline-none">
          <div className="w-8 h-8 flex items-center justify-center text-gray-800 dark:text-white relative">
            <IoIosNotificationsOutline className="text-2xl" />
            {data?.length > 0 && (
              <span className="absolute text-center top-0 right-1 text-sm text-white font-semibold w-4 h-4 rounded-full bg-red-600">
                {data.length}
              </span>
            )}
          </div>
        </PopoverButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute !-left-16 md:-left-2 z-10 mt-5 flex w-screen max-w-max px-4">
            {({ close }) =>
              data?.length > 0 && (
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {data?.slice(0, 5).map((item, index) => (
                      <div
                        key={item._id + index}
                        className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-[#1c1c1c]"
                      >
                        <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white">
                          {ICONS[item.notiType]}
                        </div>

                        <div
                          className="cursor-pointer"
                          onClick={() => viewHandler(item)}
                        ></div>
                        <div className="flex items-center gap-3 font-semibold text-gray-980 capitalize dark:text-gray-200">
                          <p>{item.notiType}</p>
                          <span className="text-xs font-normal lowercase">
                            {moment(item.createdAt).fromNow()}
                          </span>
                        </div>
                        <p className="line-clamp-1 mt-1 text-gray-600 dark:text-gray-500">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-950 bg-gray-500 ">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        onClick={
                          item?.onClick ? () => item.onClick() : () => close()
                        }
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-blue-600 hover:bg-gray-100 "
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
          </PopoverPanel>
        </Transition>
      </Popover>
    </>
  );
};

export default NotificationPane;
