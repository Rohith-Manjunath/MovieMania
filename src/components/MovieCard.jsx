import React from "react";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie?.id}`}>
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        key={movie.id}
        transitionSpeed={600}
        glareEnable={true}
        glareMaxOpacity={0.2} // Use a value between 0 and 1
        className="p-2 hover:cursor-pointer border border-1 border-gray-500 rounded-md flex items-center justify-center flex-col"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
          width={500}
          height={300}
          className="rounded-md self-center"
        />
        <div className="my-2 space-y-1">
          <h2 className="mt-2 text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mt-1 text-[15px] line-clamp-2">{movie.overview}</p>
          <div className="flex items-center justify-between gap-2">
            <span>{movie.first_air_date || movie.release_date}</span>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-1">
                <FaStar />
                <span className="mr-1">{movie.vote_average}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaRegThumbsUp />
                <span className="ml-1">{movie.vote_count}</span>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </Link>
  );
};

export default MovieCard;
