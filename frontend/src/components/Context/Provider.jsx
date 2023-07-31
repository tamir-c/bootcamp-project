/*
Article heere: https://www.js-craft.io/blog/using-react-context-nextjs-13/
*/

"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const ThemeContext = createContext({});

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(data);
      } catch ({ message }) {
        console.warn(message);
      }
    };
    fetchData();
  }, []);

  return (
    <ThemeContext.Provider value={{ data }}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
