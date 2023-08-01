"use client";
import { useEffect } from "react";
import { fetchMovie } from "@/utils/helpers/fetchMovies";

const page = ({ params }) => {
  const { id } = params;
  useEffect(() => {
    async function fetchData() {
      const movie = await fetchMovie(id);
      console.log(movie);
    }
    fetchData();
  }, []);

  return <div className="text-center">{id}</div>;
};

export default page;
