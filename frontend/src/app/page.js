"use client";

import MovieCard from "@/components/Cards/MovieCard";
import { useThemeContext } from "@/components";

export default function Home() {
  const { movies } = useThemeContext();
  /**
   To get the data in any component, we can use the useThemeContext hook.

   In the detaios page, we can call the hook and use a function to to find the right movie.

    const findByID = (id) => {
    return data.find((item) => item.id === id);
  };
   */

  return (
    <div className="m-8 grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center">
      {movies?.length > 0 ? (
        movies.map((m) => (
          <div
            key={m.movie_id}
            className="cursor-pointer"
            onClick={(id = m.movie_id) => {
              console.log(id);
            }}
          >
            <MovieCard key={m.movie_id} movieData={m} />
          </div>
        ))
      ) : (
        <h1>No Movies Available</h1>
      )}
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
