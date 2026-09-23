import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar2";

type Video = {
  key: string;
  site: string;
  type: string;
};
type VideoPlayerProps = {
  videoKey?: string;
};

const VideoPlayer=({ videoKey }: VideoPlayerProps) => {
  const [video, setVideo] = useState<Video | null>(null);
  const [description, setDescription] = useState("");

  const apiKey = "a8bd04e1711338362bc753aded515929";

  useEffect(() => {
   
    const getTopMovieTrailer = async () => {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${videoKey}?api_key=${apiKey}`
      );

      const movieData = await movieResponse.json();

      const topMovie = movieData.results[0];

      const videoResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${topMovie.id}/videos?api_key=${apiKey}`
      );

      const videoData = await videoResponse.json();

      const trailer = videoData.results.find(
        (item: Video) =>
          item.site === "YouTube" &&
          item.type === "Trailer"
      );

      setVideo(trailer);
      setDescription(topMovie.overview);
    };

    getTopMovieTrailer();
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute top-0 left-0  w-full  z-30">
        <Navbar color="bg-transparent" />
      </div>


      {video && (
        <iframe
          className=" absolute top-0 left-0 w-full h-full scale-150 md:scale-125 lg:scale-110 pointer-events-none"
          src={`https://www.youtube.com/embed/${video.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${video.key}`}
          allow="autoplay; encrypted-media"
        />
      )}


      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_20%,black_100%)]
          z-10
        "
      />


      <div className="
          absolute
          left-5
          md:left-12
          lg:left-20
          bottom-20
          md:bottom-28
          text-white
          z-20
          max-w-[90%]
          md:max-w-[600px]">

        <p className="
            text-sm
            md:text-lg
            font-semibold
            mb-5
            line-clamp-4">
          {description}
        </p>


        <div
          className="
            flex
            items-center
            gap-3
            mb-6">
          <div
            className="
              bg-red-600
              px-3
              py-2
              rounded
              font-bold
              text-sm">
            Top
            <br/>
            10
          </div>

          <h2
            className="
              font-bold
              text-base
              md:text-xl
            "
          >
            #1 in Movies Today
          </h2>
        </div>


        <div
          className="
            flex
            gap-3
            flex-wrap
          "
        >
          <button
            className="
              bg-white
              text-black

              px-6
              md:px-10

              py-2
              md:py-3

              rounded
              font-bold
            "
          >
            ▶ Play
          </button>


          <button
            className="
              bg-gray-500/70

              px-6
              md:px-10

              py-2
              md:py-3

              rounded
              font-bold
            "
          >
            ⓘ More Info
          </button>

        </div>

      </div>

    </div>
  );
};

export default VideoPlayer;