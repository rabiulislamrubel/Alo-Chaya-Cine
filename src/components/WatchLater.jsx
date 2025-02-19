import { useContext } from "react";
import { WatchLaterContext } from "../context";
import MovieCard from "./MovieCard";

export default function WatchLater() {
  const { watchLater } = useContext(WatchLaterContext);

  return (
    <div className="content">
      {watchLater.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {watchLater.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p className="text-2xl">No Watch later are selected here.</p>
        </div>
      )}
    </div>
  );
}
