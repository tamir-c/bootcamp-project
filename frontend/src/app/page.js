"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "@/components/Cards/MovieCard";
import Link from "next/link";
import { fetchMovies } from "@/utils/helpers/fetchMovies";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetchData();
  }, []);

  return (
    <div className="m-8 grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center">
      {movies?.length > 0 ? (
        movies.map((m) => (
          <Link href={`/movies/${m.movie_id}`}>
            <div key={m.movie_id} className="cursor-pointer">
              <MovieCard key={m.movie_id} movieData={m} />
            </div>
          </Link>
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
