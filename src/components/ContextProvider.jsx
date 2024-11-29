import { useReducer, useState } from "react";
import { initialState, movieReducer } from "../reducer/movieReducer";
import { MovieContext, ThemeContext } from "../context";

export default function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        {children}
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
