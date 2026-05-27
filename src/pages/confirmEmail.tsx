import React from "react";
import netflixIcon from "../assets/netflixIcon.png";
import { VscChevronUp } from "react-icons/vsc";

const ConfirmPage = () => {
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
      <div className="text-white flex justify-center mt-5 px-6">
        <div className="text-start max-w-md w-full">
          <h1 className="text-4xl font-extrabold leading-tight">
            Tap the link in your email
          </h1>

          <h2 className="mt-3 text-xl font-medium text-gray-300">
            We sent a sign-up link to the email below. Simply tap the link to
            create your account.
          </h2>

          <div className="mt-4 mb-4 rounded-md bg-zinc-800 flex justify-between items-center px-5 py-4">
            <h1 className="text-gray-200 text-sm">example@gmail.com</h1>

            <button className="text-white hover:text-gray-300 underline font-medium">
              Change
            </button>
          </div>
          <h2 className="mt-3 text-l font-medium text-gray-300">
            Did not get a link? Check your spam or <span>
                <button className=" underline">resend it</button>
            </span>.
          </h2>

          <div className=" group relative">
            <h1 className="pt-10 flex items-center gap-2">
              Get Help
              <VscChevronUp className="group-hover:rotate-180" />
            </h1>{" "}
            <h1 className="pt-1 items-center gap-2 underline hidden group-hover:flex transition-all duration-300 ease-in">
              Learn more about sign-in
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;
