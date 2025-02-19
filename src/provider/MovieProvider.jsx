import { useReducer } from "react";
import { MovieContext } from "../context";
import { initialState, movieReducer } from "../reducer/movieReducer";

export default function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
