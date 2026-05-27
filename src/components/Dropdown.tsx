import { useState,useEffect } from "react";


const Dropdown = () => {
    const [language,setlanguage]=useState("")
    const selectlanguage=(event:any)=>{
        setlanguage(event.target.value)
    }
  return (
    <>
    <div className="flex justify-center items-center text-white font-bold rounded-xl border-2 bg-black/20 mt-10 h-10 w-40">
      <select onChange={selectlanguage} id="language" name="language" className="w-full p-2" >
          <option className="text-black" value="English">语A English</option>
          <option className="text-black" value="Hindi">语A Hindi</option>
        </select>
    </div>
    </>
  );
};

export default Dropdown;
