import React from "react";
import Dropdown from "../components/Dropdown";
import { Footer } from "../components/Footer";
import Navbar from "../components/NavBar2";
import BrowseLanguage from "../components/SearchBar";
import {MovieList} from "../components/MovieList"
import VideoPlayer from "../components/PlayDemo";


export interface IAppProps {}

function TV_Shows(props: IAppProps) {
  return (
    <div
      className="w-screen min-h-screen bg-black">
      <VideoPlayer videoKey={"day"}/>
      <div className="w-full h-[70px] bg-black flex items-center justify-between px-20 pt-8">
        <h1 className="text-2xl font-medium text-white" >My List</h1>
      </div>
      <MovieList/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default TV_Shows;