import React from "react";
import netflixIcon from "../assets/netflixIcon.png";
import { VscChevronUp } from "react-icons/vsc";

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-red-950 to-black">
      {/* Header */}
      <div className="w-full flex justify-between px-8 md:px-28">
        <img
          src={netflixIcon}
          alt="Netflix"
          className="w-40 md:w-56 object-contain brightness-200"
        />
      </div>

      <hr className="border-gray-400/40" />

      {/* Login Section */}
      <div className="text-white flex justify-center mt-20 px-6">
        <div className="text-start max-w-md w-full">
          <h1 className="text-4xl font-extrabold leading-tight">
            Enter your info to sign in
          </h1>

          <h2 className="mt-3 text-xl font-medium text-gray-300">
            Or get started with a new account.
          </h2>

          <div className="pt-8">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="px-5 py-4 w-full bg-black/60 border border-gray-500 rounded-md outline-none focus:border-white"
            />
          </div>

          <div className="pt-6">
            <button className="bg-red-600 hover:bg-red-700 transition py-4 w-full rounded-md text-xl font-semibold">
              Continue
            </button>
            <div className=" group relative">
                <h1 className="pt-10 flex items-center gap-2">
              Get Help
              <VscChevronUp className="group-hover:rotate-180" />
            </h1>{" "}
            <h1 className="pt-1 items-center gap-2 underline hidden group-hover:flex transition-all duration-300 ease-in">
              Forgot email or mobile number?
            </h1>
            <h1 className="pt-1 items-center gap-2 underline hidden group-hover:flex transition-all duration-300 ease-in">
              Learn more about sign-in
            </h1>{" "}
            <p className="absolute pt-10">
              {" "}
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
