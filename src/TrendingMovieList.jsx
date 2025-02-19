import MovieCard from "./components/MovieCard";
import { getTrendingMovieList } from "./data/movieData";

export default function TrendingMovieList() {
  const MovieData = getTrendingMovieList();

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
