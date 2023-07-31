"use client"
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import axios from "axios";

const page = () => {
    const BACKEND_URL = "http://127.0.0.1:8082";
    // const BACKEND_URL = "http://18.170.108.208:8082";
    const params = useParams();
    const id = params.id;
    console.log(id);
    const [movie, setMovie] = useState();

    const getMovie = async () => {
        const response = await axios.get(`${BACKEND_URL}/movies/${movieId}`);
        const data = await response.data;
        setMovie(data);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
      <div>Movie {id}</div>
    );
};
  
  page.defaultProps = {
    movieData: {
      movie_name: "No title",
      release_year: "No release year",
      poster_url: "https://via.placeholder.com/400",
      duration_minutes: 'No duration'
    },
  };
  
  export default page;