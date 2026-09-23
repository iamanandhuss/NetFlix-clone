import { Footer } from "../components/Footer";
import Navbar from "../components/NavBar2";
import BrowseLanguage from "../components/SearchBar";
import {MovieList} from "../components/MovieList"
import { useState,useEffect } from "react";


export interface IAppProps {}

function Browse_By_Languages(props: IAppProps) {
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [searchQuary,SetsearchQuary]=useState("");
    const [search, setsearch] = useState("");

  return (
    <div
      className="w-screen min-h-screen bg-black">
      <Navbar search={search} setsearch={setsearch}/>
      <BrowseLanguage
        genre={genre}
        language={language}
        sortBy={sortBy}
        searchQuary={searchQuary}
        setGenre={setGenre}
        setLanguage={setLanguage}
        setSortBy={setSortBy}
        SetsearchQuary={SetsearchQuary}
        search={search}
        setsearch={setsearch}
      />
      <MovieList 
        genre={genre}
        language={language}
        sortBy={sortBy}
        searchQuary={searchQuary}
        search={search}
        setsearch={setsearch}
        />
      <MovieList 
        genre={genre}
        language={language}
        sortBy={sortBy}
        searchQuary={searchQuary}
        />
      <Footer/>
    </div>
  );
}

export default Browse_By_Languages;