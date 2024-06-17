import MovieList from "@/components/MovieList";

const SearchPage = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  console.log(data);

  return (
    <div className="">
      {data && data?.results?.length > 0 ? (
        <MovieList data={data} />
      ) : (
        <h2>No data yet..</h2>
      )}
    </div>
  );
};

export default SearchPage;
