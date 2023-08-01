"use client";
import { useState, useEffect } from "react";
import { fetchMovie, fetchMovieLocations } from "@/utils/helpers/fetchMovies";

import LocationCard from "../../../components/Cards/LocationCard";
import Link from "next/link";

const page = ({ params }) => {
  const [movieData, setMovieData] = useState({});
  const [movieLocations, setMovieLocations] = useState([]);

  const { id } = params;
  useEffect(() => {
    async function fetchData() {
      const movie = await fetchMovie(id);
      setMovieData(movie);
      const locations = await fetchMovieLocations(id);
      setMovieLocations(locations);
    }
    fetchData();
  }, []);

  console.log(movieLocations);
  console.log(movieData);

  return (
    <div className="grid place-items-center">
      <h1 className="font-extrabold text-2xl pt-4">{movieData.movie_name}</h1>
      <div className="place-items-center justify-center grid grid-cols-1 md:grid-cols-2 max-w-[1600px] gap-4 p-4">
        <div className="bg-base-300 place-items-center max-w-[800px] text-justify rounded-lg row-span-2 shadow-xl max-w-100 min-h-[50px]">
          <img
            // style={{
            //   objectFit: "cover",
            //   width: "300px",
            //   height: "300px",
            // }}
            src={movieData.poster_url}
            alt={`${movieData.movie_name} movie poster`}
            className="place-items-center rounded-tl-lg rounded-tr-lg h-auto max-w-full"
          />
          <div className="rounded-lg shadow-xl min-h-[50px] p-5">
            <p>{movieData.description}</p>
          </div>
        </div>

        <div className="card w-full bg-base-300 rounded-lg shadow-xl m-4 p-5 text-center place-items-center">
          <div className="p-4">
            <h2 className="font-bold">Movie Details</h2>
            <p className="m-4">Release date: {movieData.release_year}</p>
            <p className="m-4">Directed by: {movieData.director}</p>
            <p className="m-4">Genre: {movieData.genre?.genre_name}</p>
            <p className="m-4">Duration: {movieData.duration_minutes} mins</p>
          </div>
        </div>

        <div className="bg-base-300 rounded-lg text-center pt-8">
          <h1 className="font-bold">Locations</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center p-5 gap-5 rounded-lg shadow-xl min-h-[500px]">
            {movieLocations.map((loc) => (
              <Link href={`/location/${loc.city_id}`}>
                <div className="cursor-pointer">
                  <LocationCard locationData={loc} />
                </div>
              </Link>
            ))}
          </div>
        </div>
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
    genre: {
      genre_id: "-1",
      genre_name: "No genre",
    },
  },
};

export default page;
