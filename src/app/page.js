import MovieList from "@/components/MovieList";

const API_KEY = process.env.API_KEY; // Ensure the environment variable has the NEXT_PUBLIC prefix

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "Trending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "TopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch data");
    return <div>Error loading data</div>;
  }

  const data = await res.json();

  return (
    <div>
      <MovieList data={data} /> {/* Correct the prop name to `data` */}
    </div>
  );
};

export default Home;
