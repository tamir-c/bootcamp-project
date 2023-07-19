CREATE DATABASE sky_travel_db;

USE sky_travel_db;

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

INSERT INTO genre (genre_name) VALUES
('Action'),
('Adventure'),
('Animation'),
('Comedy'),
('Crime'),
('Drama'),
('Fantasy'),
('Horror'),
('Mystery'),
('Romance'),
('Science Fiction (Sci-Fi)'),
('Thriller'),
('Historical'),
('Western'),
('Musical'),
('War'),
('Biographical'),
('Documentary'),
('Superhero'),
('Sports'),
('Family'),
('Psychological'),
('Supernatural'),
('Disaster'),
('Mockumentary'),
('Satire'),
('Slice of Life'),
('Cyberpunk');

INSERT INTO movie (movie_name, description, poster_url, release_year, director, genre_id, duration_minutes) VALUES
('About Time', 'A young man discovers he can travel in time.', 'https://m.media-amazon.com/images/I/815Q1ufP6yL._AC_UF1000,1000_QL80_.jpg',  '2013', 'Richard Curtis', 10, 123),
('Interstellar', 'A team of explorers travel through a wormhole in space.', 'https://i.ebayimg.com/images/g/zu4AAOSw2spbJQ0J/s-l1600.jpg',  '2014', 'Christopher Nolan', 11, 169);



INSERT INTO city (city_name, longitude, latitude) VALUES 
('London', -0.1278, 51.5074),
('Los Angeles', -118.2437, 34.0522),
('Iceland', -21.9426, 64.1466);

select * from city;


INSERT INTO movie_city (movie_id, city_id) VALUES
(1, 1), -- About Time - London
(2, 2), -- Interstellar - Los Angeles
(2, 3); -- Interstellar - Iceland


select * from movie_city;