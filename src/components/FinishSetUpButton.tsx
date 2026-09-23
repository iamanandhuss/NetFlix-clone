import { IoIosArrowForward } from "react-icons/io";
export const FinishSetUpButton: React.FC<{}> = ({}) => {
  return (
    <>
      <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center pb-20">
        <div className="relative">
          <button className="bg-red-600 hover:bg-red-700 transition px-20 cursor-pointer py-4 rounded-md text-xl relative">
            <div className="flex justify-between items-center ">
                <h1 className="font-bold left-0">Finish Sign-Up</h1>  <IoIosArrowForward  className="absolute right-4 text-3xl"/>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
