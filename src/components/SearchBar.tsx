import { movieTypes } from "../data/movieTypes";
import { languages } from "../data/languages";
import { audioOptions } from "../data/audioOptions";
import { sortOptions } from "../data/SortBy";
import { useState,useEffect } from "react";
 
interface Props {
  genre: string;
  language: string;
  sortBy: string;
  searchQuary:string;
  search:string;
  setGenre: (genre: string) => void;
  setLanguage: (language: string) => void;
  setSortBy: (sortBy: string) => void;
  SetsearchQuary:(quary:string)=>void;
  setsearch: (search: string) => void;
}

function BrowseLanguage({genre,language,sortBy,searchQuary,setGenre,setLanguage,setSortBy,SetsearchQuary}:Props) {
  useEffect(()=>{
    console.log(genre,language,sortBy,searchQuary);
  },[genre,language,sortBy,searchQuary])
    

  return (
    <div className="w-full bg-black text-white px-5 md:px-20 py-6">

      <h1 className="text-center text-2xl font-bold mb-10">
        Browse By Language
      </h1>


      <div className="flex flex-col lg:flex-row justify-between gap-8">

        <div className="flex flex-wrap items-center gap-5">

          <h2 className="text-xl font-bold">
            Select Your Preference
          </h2>


          <select
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}
            className="bg-black border border-white w-56 h-10 px-3 text-sm outline-none"
          >
            {movieTypes.map((type)=>(
              <option 
                key={type.id}
                value={type.id}
              >
                {type.name}
              </option>
            ))}
          </select>


          <select
            className="bg-black border border-white w-40 h-10 px-3 text-sm outline-none"
          >
            {audioOptions.map((item)=>(
              <option 
                key={item.id}
                value={item.value}
              >
                {item.name}
              </option>
            ))}
          </select>


          <select
            value={language}
            onChange={(e)=>setLanguage(e.target.value)}
            className="bg-black border border-white w-52 h-10 px-3 text-sm outline-none"
          >
            {languages.map((lang)=>(
              <option 
                key={lang.id}
                value={lang.code}
              >
                {lang.name}
              </option>
            ))}
          </select>

        </div>



        <div className="flex items-center gap-5">

          <h2 className="text-xl font-bold">
            Sort by
          </h2>


          <select
            value={sortBy}
            onChange={(e)=>setSortBy(e.target.value)}
            className="bg-black border border-white w-60 h-10 px-3 text-sm outline-none"
          >
            {sortOptions.map((item)=>(
              <option
                key={item.id}
                value={item.value}
              >
                {item.name}
              </option>
            ))}
          </select>

        </div>

      </div>

    </div>
  );
}

export default BrowseLanguage;