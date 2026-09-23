import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";


export const SignOutButton = () => {
    const {Email,setEmail}=useApp();
    const navigate = useNavigate();
    const handleSignOut = () => {
        setEmail(' ');
        navigate("/");
    };
    useEffect(()=>{
        navigate("/");
    },[Email])
  return (
    <>
      <div  onClick={handleSignOut} className="flex justify-center cursor-pointer items-center text-white font-bold rounded-xl bg-red-500 mt-10 h-10 w-30 ml-6">
              <h2>Sign Out</h2>
      </div>
    </>
  );
};
