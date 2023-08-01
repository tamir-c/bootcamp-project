"use client";
import { useState, useEffect } from "react";
import { fetchMovie } from "@/utils/helpers/fetchMovies";

import MovieCard from "../../../components/Cards/MovieCard";

const page = ({ params }) => {
  const { id } = params;
  useEffect(() => {
    async function fetchData() {
      const movie = await fetchMovie(id);
      console.log(movie);
    }
    fetchData();
  }, []);
  const BACKEND_URL = "http://127.0.0.1:8082";
  // const BACKEND_URL = "http://18.170.108.208:8082";

  const movieData = {
    movie_id: 1,
    movie_name: "About Time",
    description: "A young man discovers he can travel in time.",
    poster_url:
      "https://m.media-amazon.com/images/I/815Q1ufP6yL._AC_UF1000,1000_QL80_.jpg",
    release_year: "2013",
    director: "Richard Curtis",
    duration_minutes: 123,
  };

  return (
    // <img
    //   // style={{
    //   //   objectFit: "cover",
    //   //   width: "300px",
    //   //   height: "300px",
    //   // }}
    //   src={movieData.poster_url}
    //   alt={`${movieData.movie_name} movie poster`}
    // />
    <div className="grid h-screen place-items-center">
      <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 max-w-[1600px] gap-4 m-8">
        <div className="bg-red-500 place-items-center max-w-[800px] text-justify rounded-lg shadow-xl max-w-100 row-span-2 min-h-[50px]">
          <img
            // style={{
            //   objectFit: "cover",
            //   width: "300px",
            //   height: "300px",
            // }}
            src={movieData.poster_url}
            alt={`${movieData.movie_name} movie poster`}
            className="place-items-center h-auto max-w-full rounded-lg"
          />
          <div className="rounded-lg shadow-xl min-h-[50px] p-5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati reiciendis ipsum voluptas, itaque, repellendus tempora
              fuga rem dolorum quasi officia sit maxime corrupti nihil atque
              error voluptates? Sit, accusantium nulla.
            </p>
          </div>
        </div>
        <div className="bg-blue-500 rounded-lg shadow-xl min-h-[50px] p-5 text-center place-items-center">
          <p>Release date: 2013</p>
          <p>Directed by: Richard Curtis</p>
          <p>Genre: Romance</p>
          <p>Duration</p>
        </div>
        <div className="bg-green-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center p-5 gap-5 rounded-lg shadow-xl min-h-[50px] row-span-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        {/* <div className="rounded-lg shadow-xl min-h-[50px] p-5 border-4 border-black">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            reiciendis ipsum voluptas, itaque, repellendus tempora fuga rem
            dolorum quasi officia sit maxime corrupti nihil atque error
            voluptates? Sit, accusantium nulla.
          </p>
        </div> */}
      </div>
    </div>
  );
};

page.defaultProps = {
  movieData: {
    movie_name: "No title",
    release_year: "No release year",
    poster_url: "https://via.placeholder.com/400",
    duration_minutes: "No duration",
  },
};

export default page;
