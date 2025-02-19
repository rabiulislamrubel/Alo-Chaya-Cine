import { getMovieList } from "../data/movieData";
import MovieCard from "./MovieCard";

export default function ComingSoon() {
  const MovieData = getMovieList();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {MovieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
