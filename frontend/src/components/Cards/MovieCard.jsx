"use client";
import AboutTime from "@assets/about-time.jpg";
import Image from "next/image";
import PropTypes from 'prop-types';

const MovieCard = ({movieData}) => {
  return (
    <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
      <Image src={AboutTime} alt="About Time movie poster" />
      <div className="m-4">
        <span className="font-bold">{movieData.title}</span>
        <span className="block text-grey-500 text-sm">{movieData.year}</span>
        <span className="block text-grey-500 text-sm">{movieData.genre}</span>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movieData: {
    title: 'About Time',
    year: '2013',
    genre: 'Romance',
    src: "@assets/about-time.jpg"
  }
};


export default MovieCard;