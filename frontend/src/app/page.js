"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "@/components/Cards/MovieCard";
import Link from "next/link";
import { fetchMovies } from "@/utils/helpers/fetchMovies";

export default function Home() {
  const BACKEND_URL = "http://127.0.0.1:8082";
  // const BACKEND_URL = "http://18.170.108.208:8082";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetchData();
  }, []);

  return (
    <div className="m-8 gap-6 place-items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {movies?.length > 0 ? (
        movies.map((m) => (
          <Link key={m.movie_id} href={`/movies/${m.movie_id}`}>
            <div className="cursor-pointer">
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
