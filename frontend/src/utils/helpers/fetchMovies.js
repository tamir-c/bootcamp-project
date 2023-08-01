import axios from "axios";
export const fetchMovies = async () => {
  try {
    const { data } = await axios.get("http://localhost:8080/movies");
    return data;
  } catch ({ message }) {
    console.warn(message);
  }
};

export const fetchMovie = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/movies/${id}`);
    return data;
  } catch ({ message }) {
    console.warn(message);
  }
};
