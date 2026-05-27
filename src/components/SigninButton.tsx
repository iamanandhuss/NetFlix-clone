import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const SigninButton = () => {
    const navigate = useNavigate();
  return (
    <>
      <div  onClick={() => navigate("/login")} className="flex justify-center cursor-pointer items-center text-white font-bold rounded-xl bg-red-500 mt-10 h-10 w-30 ml-6">
              <h2>Sign in</h2>
      </div>
    </>
  );
};
