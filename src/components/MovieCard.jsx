import { useContext, useState } from "react";
import { getImgURL } from "../utilities/ImageURL";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../context";
import { toast } from "react-toastify";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { state, dispatch } = useContext(MovieContext);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleAddCartData = (e, movie) => {
    e.stopPropagation();

    const found = state.cartData.find((m) => m.id === movie.id);

    if (!found) {
      dispatch({
        type: 'Add_Cart_Data',
        payload: movie
      })
      toast.success(`The ${movie.title} is added to cart successfully.`,{
        position: 'bottom-right',
      })
    }else{
      toast.error(`This ${movie.title} is already added to Cart`,{
        position: 'bottom-right'
      })
      // console.log(`This ${movie.title} is already added to Cart`);
    }
    
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClosed={handleModalClose} onAdd={handleAddCartData}/>
      )}

      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelect(movie)}>
          <img
            className="w-full object-cover"
            src={getImgURL(movie.cover)}
            alt="cover photo"
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={movie.rating} />
              <img src="./assets/star.svg" width="14" height="14" alt="" />
              <img src="./assets/star.svg" width="14" height="14" alt="" />
              <img src="./assets/star.svg" width="14" height="14" alt="" />
              <img src="./assets/star.svg" width="14" height="14" alt="" />
              <img src="./assets/star.svg" width="14" height="14" alt="" />
            </div>
            <button
              className="bg-primary w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddCartData(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
