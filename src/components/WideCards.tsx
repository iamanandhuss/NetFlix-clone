import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/Auth";

import {
  CirclePlay,
  CirclePlus,
  Hd,
  ThumbsUp,
  ChevronDown,
} from "lucide-react";
import netflix from "../assets/NetflixLogo.png";

type Video = {
  key: string;
  site: string;
  type: string;
};

type Movie = {
  id?: number;
};

export const WideCards: React.FC<{
  count?: number;
  poster: string;
  toggleModal: any;
  setselectedMovie: any;
  item: Movie;
}> = ({ count, poster, toggleModal, setselectedMovie, item }) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [hover, setHover] = useState(false);
  const { favoriteMovies, setFavoriteMovies } = UserAuth();
  

  const apiKey = "a8bd04e1711338362bc753aded515929";

  const convertRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`;
  };

  useEffect(() => {
    const getVideo = async () => {
      if (!item.id) return;

      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${apiKey}`,
      );

      const data = await response.json();

      const trailer = data.results.find(
        (video: Video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

      setVideo(trailer || null);
    };

    getVideo();
  }, [item.id]);

    const toggleFavorite = (movie: any) => {
    const exists = favoriteMovies.some((item) => item.id === movie.id);
    if (exists) {
      setFavoriteMovies((prev) => prev.filter((item) => item.id !== movie.id));
    } else {
      setFavoriteMovies((prev) => [...prev, movie]);
    }
  };

  return (
    <div
      className="group m-10 cursor-pointer transition hover:scale-125 duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        toggleModal();
        setselectedMovie(item);
      }}
    >
      <div
        className="
        relative
        w-80
        h-45
        overflow-hidden
        bg-black
        border
        "
      >
        {hover && video ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&controls=0&rel=0`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              className="w-full h-full object-cover"
            />

            <img
              src={netflix}
              className="absolute top-0 left-0 w-10"
            />
          </>
        )}

        {count && (
          <h1
            className="
            absolute
            -left-6
            bottom-6
            text-8xl
            font-extrabold
            text-black
            [-webkit-text-stroke:2px_white]
            "
          >
            {count}
          </h1>
        )}
      </div>

      <div className="hidden group-hover:block bg-black p-3">
        <div className="flex text-white">
          <CirclePlay className="mx-2" size={20} />
          <button onClick={()=>toggleFavorite(item)}>
            {favoriteMovies.some(movie=>movie.id===item.id)?"✓":(<CirclePlus className="mx-2" size={20} />)}
          </button>
          <ThumbsUp className="mx-2" size={20} />
          <ChevronDown className="mx-2" size={20} />
        </div>

        <div className="flex items-center gap-2 mt-2 text-white">
          <span className="text-green-500 font-bold text-sm">
            99% Match
          </span>

          <span className="text-sm">
            2023
          </span>

          <span className="text-sm">
            {convertRuntime(150)}
          </span>

          <Hd size={20} />
        </div>

        <div className="text-xs mt-2 text-gray-300">
          self-harm&nbsp; suicide • tobacco use violence
        </div>
      </div>
    </div>
  );
};