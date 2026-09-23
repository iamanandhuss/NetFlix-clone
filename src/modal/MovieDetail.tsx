import React from "react";
import { Modal, ModalBody } from "flowbite-react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {MovieList}  from "../components/MovieList"



type Movie = {
  id:Number;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average?: number;
};

type Props = {
  openModal: boolean;
  toggleModal: () => void;
  selectedMovie: Movie | null;
};

const MovieDetail: React.FC<Props> = ({
  openModal,
  toggleModal,
  selectedMovie,
}) => {
  if (!selectedMovie) return null;
  const navigate = useNavigate();

  return (
    <Modal
      show={openModal}
      onClose={toggleModal}
      size="4xl"
      dismissible
      popup
      theme={{
        content: {
          base: "relative w-full p-2 md:h-auto",
          inner:
            "relative flex flex-col overflow-hidden rounded-xl bg-black shadow-lg",
        },
      }}
    >
      <ModalBody className="p-0">
        <div className="relative h-[760px] w-full overflow-hidden rounded-xl bg-black">
          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
            alt={selectedMovie.title}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/70
              to-transparent
            "
          />

          <button
            onClick={toggleModal}
            className="
              absolute
              right-5
              top-5
              z-50
              rounded-full
              bg-black/40
              p-2
              transition
              hover:bg-black/70
            "
          >
            <X size={35} className="text-white" />
          </button>

          <div
            className="
              absolute
              bottom-0
              z-40
              w-full
              px-5
              sm:px-10
              pb-12
            "
          >
            <h1
              className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                font-extrabold
                text-white
                leading-tight
              "
            >
              {selectedMovie.title}
            </h1>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "
            >
              <span
                className="
                  rounded-md
                  bg-gray-700/80
                  px-3
                  py-1
                  text-sm
                  text-white
                "
              >
                {selectedMovie.release_date?.split("-")[0]}
              </span>

              <span
                className="
                  rounded-md
                  bg-red-600/90
                  px-3
                  py-1
                  text-sm
                  text-white
                "
              >
                ⭐ {selectedMovie.vote_average?.toFixed(1)}
              </span>

              <span
                className="
                  rounded-md
                  bg-gray-700/80
                  px-3
                  py-1
                  text-sm
                  text-white
                "
              >
                Movie
              </span>
            </div>

            <p
              className="
                mt-8
                max-w-3xl
                text-base
                sm:text-lg
                md:text-2xl
                leading-relaxed
                text-white
              "
            >
              {selectedMovie.overview}
            </p>

            <button
              onClick={() => {
                navigate(`/watch/${selectedMovie.id}`);
              }}
              className="
                mt-10
                flex
                items-center
                gap-3
                rounded-md
                bg-red-600
                px-8
                py-4
                text-lg
                sm:text-2xl
                font-semibold
                text-white
                transition
                hover:bg-red-700
              "
            >
              Watch Now
              <span className="text-3xl">›</span>
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default MovieDetail;
