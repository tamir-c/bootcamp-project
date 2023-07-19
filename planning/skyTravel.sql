CREATE DATABASE skyTravel_DB;

USE skyTravel_DB;

CREATE TABLE genre (
	genre_id INT AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(25) NOT NULL
);

CREATE TABLE movie (
  movie_id INT AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(50) NOT NULL,
  description TEXT,
  poster_url VARCHAR(255),
  release_year VARCHAR(4),
  director VARCHAR(25),
  genre_id INT NOT NULL,
  duration_minutes INT,
  FOREIGN KEY (genre_id) REFERENCES genre(genre_id)
);

CREATE TABLE city (
  city_id INT AUTO_INCREMENT PRIMARY KEY,
  city_name VARCHAR(255) NOT NULL,
  longitude DOUBLE NOT NULL,
  latitude DOUBLE NOT NULL
);

CREATE TABLE movie_city (
  movie_city_id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT NOT NULL,
  city_id INT NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
  FOREIGN KEY (city_id) REFERENCES city(city_id)
);

CREATE TABLE user (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  display_name VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(255) NOT NULL
);