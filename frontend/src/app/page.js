'use client'

import MovieCard from "@/components/Cards/MovieCard";
import { useState, useEffect, use } from "react";

export default function Home() {

  const BACKEND_URL = 'http://127.0.0.1:8082';
  const [movies, setMovies] = useState({});

  // const getMovies = async () => {
  //   const response = await fetch(`${BACKEND_URL}/movies`);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <div className="m-8 grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 gap-10 place-items-center">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
