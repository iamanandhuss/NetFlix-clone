import React from "react";
import { WideCards } from "../components/WideCards";
import { useState, useEffect } from "react";
import instance from "../Requests/axios";
import type {Category} from "../Types/Types";
import MovieDetail from "../modal/MovieDetail";

type Props = {
  category: Category;
};

export const MovieCategoryList = ({ category }: Props) => {
  const [movie, setMovie] = useState<any[]>([]);
  const [selectedMovie, setselectedMovie] = useState<any>({});
  const [openModal, setopenModal] = useState(false);

 useEffect(() => {

    const fetchMovie = async () => {

      try {

        let url = "/discover/movie";

        let params:any = {
          api_key:"a8bd04e1711338362bc753aded515929",
        };


        if(category.type === "trending"){
          url="/trending/movie/week";
        }


        else if(category.type === "popular"){
          url="/movie/popular";
        }


        else if(category.type === "top_rated"){
          url="/movie/top_rated";
        }


        else if(category.genre){

          params = {
            ...params,
            with_original_language: category.genre,
            sort_by:"popularity.desc"
          };

        }


        else if(category.genreId){

          params = {
            ...params,
            with_genres: category.genreId,
            sort_by:"popularity.desc"
          };

        }


        else if(category.sort){

          params = {
            ...params,
            sort_by: category.sort
          };

        }



        const response = await instance.get(
          url,
          {params}
        );


        setMovie(response.data.results);


      } catch(error){

        console.log(error);

      }

    };


    fetchMovie();


  }, [category]);




  const toggleModal = () => {
    setopenModal(!openModal);
  };

  return (
    <>
    <MovieDetail  openModal={openModal} toggleModal={toggleModal} selectedMovie={selectedMovie} />
    <div>
      <div className="flex gap-1 overflow-x-scroll scrollbar-none overflow-y-hidden p-8">
        {movie.map((item, index) => (
          <WideCards
            item={item}
            setselectedMovie={setselectedMovie}
            toggleModal={toggleModal}
            key={item.id}
            poster={item.backdrop_path}
          />
        ))}
      </div>
    </div>
    </>
  );
};
