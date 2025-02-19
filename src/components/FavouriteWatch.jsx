import { useContext, useState } from "react";
import favRedIcon from "../assets/icons/favourite-red.svg";
import favIcon from "../assets/icons/favourite.svg";
import watchLaterYellowIcon from "../assets/icons/watchLater-yellow.svg";
import watchLaterIcon from "../assets/icons/watchLater.svg";
import { FavouritesContext, WatchLaterContext } from "../context";

export default function FavouriteWatch({ movie }) {
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleWatch, setToggleWatch] = useState(false);
  const { favourites, addFavoritesMovies, removeFavoritesMovies } =
    useContext(FavouritesContext);

  const { watchLater, addWatchLaterMovies, removeWatchLaterMovies } =
    useContext(WatchLaterContext);

  const foundFav = favourites.find((mv) => mv.id == movie.id);
  const favDrive = foundFav || toggleFav;

  const foundWat = watchLater.find((mv) => mv.id == movie.id);
  const watDrive = foundWat || toggleWatch;

  const handleFavourite = (e, mov) => {
    e.stopPropagation();
    const found = favourites.find((mv) => mv.id === mov.id);
    if (!found) {
      addFavoritesMovies(mov);
    } else {
      removeFavoritesMovies(mov.id);
    }
    setToggleFav(!found);
  };

  const handleWatchLater = (e, mov) => {
    e.stopPropagation();
    const found = watchLater.find((mv) => mv.id === mov.id);
    if (!found) {
      addWatchLaterMovies(mov);
    } else {
      removeWatchLaterMovies(mov.id);
    }
    setToggleWatch(!found);
  };

  return (
    <div className="flex space-x-1">
      <button onClick={(e) => handleFavourite(e, movie)}>
        <img src={favDrive ? favRedIcon : favIcon} alt="favourite icon" />
      </button>
      <button onClick={(e) => handleWatchLater(e, movie)}>
        <img
          src={watDrive ? watchLaterYellowIcon : watchLaterIcon}
          alt="watch later icon"
        />
      </button>
    </div>
  );
}
