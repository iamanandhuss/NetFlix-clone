import React from "react";

export const Card: React.FC<{ count: number; poster: string }> = ({
  count,
  poster,
}) => {
  return (
    <div className="relative m-10">
      <div
        className="
          w-52
          h-72
          rounded-lg
          overflow-hidden
          bg-center
          bg-cover
          bg-no-repeat
          border
        "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster})`,
        }}
      >
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
      </div>
    </div>
  );
};