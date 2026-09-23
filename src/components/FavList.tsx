import React from "react";
import { WideCards } from "../components/WideCards";
import { useState, useEffect } from "react";
import instance from "../Requests/axios";
import MovieDetail from "../modal/MovieDetail";
import { UserAuth } from "../context/Auth";


type Props = {
  genre?: string;
  language?: string;
  sortBy?: string;
  searchQuary?: string;
  search?: string;
  setsearch?: React.Dispatch<React.SetStateAction<string>>;
};

export const FavList = ({
  genre,
  language,
  sortBy,
  search,
  searchQuary,
  setsearch,
}: Props) => {
  const [movie, setmovie] = useState<any[]>([]);
  const [selectedMovie, setselectedMovie] = useState<any>(null);
  const [openModal, setopenModal] = useState(false);
  const { favoriteMovies, setFavoriteMovies } = UserAuth();


  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await instance.get(
          search ? "/search/movie" : "/discover/movie",
          {
            params: {
              api_key: "a8bd04e1711338362bc753aded515929",
              query: search || undefined,
              with_original_language: language || undefined,
              with_genres: genre || undefined,
              sort_by: sortBy || "popularity.desc",
            },
          },
        );
        setmovie(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      fetchMovie();
    }, 2000);
    return () => clearTimeout(timer);
  }, [genre, language, sortBy, searchQuary, search]);

  const toggleModal = () => {
    setopenModal(!openModal);
  };

  return (
    <>
      <MovieDetail
        openModal={openModal}
        toggleModal={toggleModal}
        selectedMovie={selectedMovie}
      />
      <div>
        <div className="flex flex-wrap gap-1 p-8">
          {favoriteMovies.map(
            (item, index) =>
              item.backdrop_path && (
                <WideCards
                  item={item}
                  setselectedMovie={setselectedMovie}
                  toggleModal={toggleModal}
                  key={item.id}
                  poster={item.backdrop_path}
                />
              ),
          )}
        </div>
      </div>
    </>
  );
};
