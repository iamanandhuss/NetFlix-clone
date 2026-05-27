import React from "react";
import netflixIcon from "../assets/netflixIcon.png";
import { IoLaptopOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";


const SendLink = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <div className="w-full flex justify-between px-8 md:px-28">
        <img
          src={netflixIcon}
          alt="Netflix"
          className="w-40 md:w-56 object-contain brightness-200"
        />
        <div className="flex items-center">
            <button className=" border-white hover:bg-gray-200 h-10 rounded-md px-4">
            <h1 className="font-bold">Sign in</h1>
        </button>
        </div>
      </div>

      <hr className="border-gray-400/40" />

      {/* Login Section */}
      <div className="text-white flex justify-center mt-10 px-6">
        <div className="text-start max-w-md w-full">
          <div className="flex justify-start items-center">
           <IoLaptopOutline className="text-red-500 m-4 text-5xl stroke-1" />
           <FiMonitor className="text-red-500 m-4 text-7xl stroke-1"/>
           <FiSmartphone className="text-red-500 m-4 text-5xl stroke-1"/>
          </div>
          <p className="text-black">Step 1 of 3</p>
          <h2 className="mt-3 mb-3 text-2xl  font-bold text-black">
            Finish setting up your account
          </h2>
          <p className="text-black font-medium">
            We will send a sign-up link to so you can use Netflix without a
            password on any device at any time.
          </p>

          <div className="pt-6">
            <button className="bg-red-600 hover:bg-red-700 transition py-4 w-full rounded-md text-xl font-semibold">
              Send Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendLink;
