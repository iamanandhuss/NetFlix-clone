import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export const QuestionCard: React.FC<{ Question: string; ans: string }> = ({
  Question,
  ans,
}) => {
  const [answer, setanswer] = useState(false);
  const clickHandle = () => {setanswer(!answer)};
  return (
    <>
      <div className="relative m-10 rounded-l" onClick={clickHandle}>
        <div className="bg-gray-700 hover:bg-gray-500 w-full h-22 overflow-hidden flex items-center p-4 justify-between">
          <h1 className="text-white text-l  font-medium">{Question}</h1>
          <FaPlus
  className={`text-white text-4xl font-medium ${
    answer ? "rotate-45" : ""
  }`}
/>
        </div>
        <div
          className={`bg-gray-700 p-2 hover:bg-gray-500 w-full h-22 overflow-hidden flex items-center justify-between mt-0.5 ${answer ? "transition-transform ease-in duration-300 active:transition-none" : "hidden"}`}
        >
          <h1 className="text-white text-l  font-medium">{ans}</h1>
        </div>
      </div>
    </>
  );
};
