"use client";

import MovieCard from "@/components/Cards/MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  // const BACKEND_URL = "http://127.0.0.1:8082";
  const BACKEND_URL = "http://18.170.108.208:8082";
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(`${BACKEND_URL}/movies`);
    const data = await response.data;
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="m-8 grid 2xl:grid-cols-8 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center">
      {movies?.length > 0 ? (
        movies.map((m) => (
          <div
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
