import React from "react";
import Dropdown from "../components/Dropdown";
import { Footer } from "../components/Footer";
import Navbar from "../components/NavBar2";
import BrowseLanguage from "../components/SearchBar";
import {FavList} from "../components/FavList"


export interface IAppProps {}

function MyList(props: IAppProps) {
  return (
    <div
      className="w-screen min-h-screen bg-black">
      <Navbar/>
      <div className="w-full h-[70px] bg-black flex items-center justify-between px-20 pt-8">
        <h1 className="text-2xl font-medium text-white" >My List</h1>
      </div>
      <FavList/>
      <Footer/>
    </div>
  );
}

export default MyList;