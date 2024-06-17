import Image from "next/image";
import React from "react";

const MovieData = async ({ params }) => {
  const id = params?.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <div className="p-4 space-y-6 sm:space-y-0 max-w-7xl mx-auto sm:grid grid-cols-2 my-10 border borer-white  rounded-lg">
      <div className="flex items-center justify-center">
        <Image
          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
          alt={data?.title || data?.name}
          width={200}
          height={200}
          className="rounded-md self-center"
          loading="lazy"
        />
      </div>
      <div className="space-y-4">
        <strong>{data?.title || data?.name}</strong>
        <p>
          {" "}
          <strong>Overview : </strong> {data?.overview}
        </p>
        <p>
          <strong>Date Released : </strong> {data?.release_date}
        </p>
        <p>
          {" "}
          <strong>Rating : </strong> {data?.vote_average}
        </p>
      </div>
    </div>
  );
};

export default MovieData;
