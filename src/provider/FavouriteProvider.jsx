import { FavouritesContext } from "../context";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavouritesValue] = useLocalStorage(
    "favouritesMovies",
    []
  );

  const addFavoritesMovies = (movie) => {
    setFavouritesValue([...favourites, movie]);
  };

  const removeFavoritesMovies = (movieId) => {
    const filterMovies = favourites.filter((movie) => movie.id !== movieId);

    setFavouritesValue(filterMovies);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavoritesMovies, removeFavoritesMovies }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouriteProvider;
