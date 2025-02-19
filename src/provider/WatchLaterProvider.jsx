import { WatchLaterContext } from "../context";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function WatchLaterProvider({ children }) {
  const [watchLater, setWatchLater] = useLocalStorage("watchLaterMovies", []);

  const addWatchLaterMovies = (movie) => {
    setWatchLater([...watchLater, movie]);
  };

  const removeWatchLaterMovies = (movieId) => {
    const filterMovies = watchLater.filter((movie) => movie.id !== movieId);

    setWatchLater(filterMovies);
  };

  return (
    <WatchLaterContext.Provider
      value={{ watchLater, addWatchLaterMovies, removeWatchLaterMovies }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
}
