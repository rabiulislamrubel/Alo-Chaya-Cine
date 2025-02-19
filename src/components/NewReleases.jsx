import { getNewReleaseMovieList } from "../data/movieData";
import MovieCard from "./MovieCard";

export default function NewReleases() {
  const newReleaseMovie = getNewReleaseMovieList();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {newReleaseMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
