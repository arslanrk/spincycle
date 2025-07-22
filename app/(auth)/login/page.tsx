"use client";

import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic here
    console.log("Logging in with", { username, password });
  };
  return (
    <div className="p-6 sm:p-8">
      <h1 className="text-slate-900 text-center text-3xl font-semibold">
        Sign in
      </h1>
      <form className="mt-12 space-y-6">
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            User name
          </label>
          <div className="relative flex items-center">
            <input
              name="username"
              type="text"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter user name"
            />
            <FaUserPlus color="#bbb" className="w-4 h-4 absolute right-4" />
          </div>
        </div>
        <div>
          <label className="text-slate-900 text-sm font-medium mb-2 block">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              name="password"
              type="password"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter password"
            />
            <IoEye color="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
            />
            <label className="ml-3 block text-sm text-slate-900">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <a
              href="jajvascript:void(0);"
              className="text-blue-600 hover:underline font-semibold"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="!mt-12">
          <button
            type="button"
            className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
          >
            Sign in
          </button>
        </div>
        <p className="text-slate-900 text-sm !mt-6 text-center">
          Don't have an account?{" "}
          <a
            href="javascript:void(0);"
            className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
          >
            Register here
          </a>
        </p>
      </form>
    </div>
  );
};

export default page;
