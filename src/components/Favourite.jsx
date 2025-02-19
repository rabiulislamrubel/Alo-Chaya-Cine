import { useContext } from "react";
import { FavouritesContext } from "../context";
import MovieCard from "./MovieCard";

export default function Favourite() {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="content">
      {favourites.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl">No Favourites are selected here.</p>
        </div>
      )}
    </div>
  );
}
