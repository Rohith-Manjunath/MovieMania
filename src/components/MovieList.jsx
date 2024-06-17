"use client";
import MovieCard from "./MovieCard";

const MovieList = ({ data }) => {
  return (
    <div className=" p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
      {data?.results?.map((movie) => (
        <MovieCard key={movie?.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
