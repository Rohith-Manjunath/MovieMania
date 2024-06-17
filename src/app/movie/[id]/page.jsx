import React from "react";

const MovieData = ({ params }) => {
  const id = params.id;

  return <div>{params.id}</div>;
};

export default MovieData;
