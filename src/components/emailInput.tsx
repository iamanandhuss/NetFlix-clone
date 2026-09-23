import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useApp } from "../context/AppContext";

export const EmailInput: React.FC<{ email: string; setemail: (email: string) => void }> = ({
  email,
  setemail,
}) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const {setEmail} =useApp();

  const handleGetStarted = () => {
    const enteredEmail = inputRef.current?.value;

    if (enteredEmail && enteredEmail.trim() !== "") {
      setEmail(enteredEmail); 
      navigate('/login');   
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <>
      <div>
        <p className="mt-6 text-base md:text-lg text-gray-300">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <div className="relative">
            <input
              ref={inputRef}
              type="email"
              id="email-input"
              placeholder=" "
              defaultValue={email} 
              className="peer px-5 py-4 w-full md:w-96 text-white bg-black/60 border border-gray-500 rounded-md outline-none focus:border-white placeholder-transparent"
            />
            <label
              htmlFor="email-input"
              className="absolute left-4 -top-2.5 px-1 text-xs text-transparent transition-all pointer-events-none
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white border-0 
               peer-focus:-top-0.5 peer-focus:text-xs peer-focus:text-white focus:text-black"
            >
              Email address
            </label>
          </div>
          <button
            onClick={handleGetStarted}
            className="bg-red-600 hover:bg-red-700 transition px-8 cursor-pointer py-4 rounded-md text-xl font-semibold"
          >
            Get Started &gt;
          </button>
        </div>
      </div>
    </>
  );
};
