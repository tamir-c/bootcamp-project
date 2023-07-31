"use client";
import Image from 'next/image'

const MovieCard = ({ movieData }) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <div className=''>
        <img
          // src='https://m.media-amazon.com/images/I/815Q1ufP6yL._AC_UF1000,1000_QL80_.jpg'
          src={movieData.poster_url}
          alt={`${movieData.movie_name} movie poster`}
        />
      </div>
      <Image
          src={movieData.poster_url}
          alt={`${movieData.movie_name} movie poster`}
          width={200}
          height={300}
      />

      <div className="m-4">
        <span className="font-bold">{movieData.movie_name}</span>
        <span className="block text-grey-500 text-sm">{movieData.release_year}</span>
        <span className="block text-grey-500 text-sm">{`${movieData.duration_minutes} mins`}</span>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movieData: {
    movie_name: "No title",
    release_year: "No release year",
    poster_url: "https://via.placeholder.com/400",
    duration_minutes: 'No duration'
  },
};

export default MovieCard;
