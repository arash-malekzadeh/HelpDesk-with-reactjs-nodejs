import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./../index.css";

import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("submit");
  };
  console.log(user);
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);
  return (
    <div className="w-full min-h-screen flex items-center flex-col bg-[#f3f4f6] lg:flex-row">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        {/* left side */}
        <div className="h-full  lg:w-2/3 w-full flex flex-col items-center justify-center">
          <div className="w-full  md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10  2xl:-mt-20">
            <span className=" flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-400 text-gray-600  ">
              تمام درخواست‌ها و وظایف پشتیبانی خود را در یک مکان مدیریت کنید.
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700">
              <span> اپلیکیشن آنلاین</span>
              <span>مدیریت وظایف پشتیبانی</span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-auto md:!w-[400px] flex flex-col gap-y-8 bg-white  !p-12"
          >
            <div>
              <p className="text-blue-600 text-3xl font-bold text-center">
                خوش آمدید!
              </p>
              <p className="text-center text-base text-gray-700">
                تمام اطلاعات ورود خود را ایمن نگه دارید.
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="آدرس ایمیل "
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email Address is required",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="کلمه عبور"
                type="password"
                name="password"
                label="آدرس ایمیل "
                className="w-full rounded-full"
                register={register("password", {
                  required: "password  is required",
                })}
                error={errors.password ? errors.password.message : ""}
              />
              <span className="text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer">
                فراموشی کلمه عبور؟
              </span>
              <Button
                type="submit"
                label="ورود"
                className="w-full h-10 bg-blue-700 text-white"
              />
            </div>
          </form>
        </div>
      </div>
      {/* right side */}
    </div>
  );
};

export default Login;
