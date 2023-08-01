/*
Article heere: https://www.js-craft.io/blog/using-react-context-nextjs-13/
*/

"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({});

export const Provider = ({ children }) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
