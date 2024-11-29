import { useReducer, useState } from "react";
import { initialState, movieReducer } from "../reducer/movieReducer";
import { MovieContext, ThemeContext } from "../context";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        {children}
        <ToastContainer/>
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
