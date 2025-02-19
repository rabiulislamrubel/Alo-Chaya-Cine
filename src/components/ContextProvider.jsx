import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavouriteProvider from "../provider/FavouriteProvider";
import MovieProvider from "../provider/MovieProvider";
import ThemeProvider from "../provider/ThemeProvider";
import WatchLaterProvider from "../provider/WatchLaterProvider";

export default function ContextProvider({ children }) {
  return (
    <ThemeProvider>
      <WatchLaterProvider>
        <FavouriteProvider>
          <MovieProvider>
            {children}
            <ToastContainer />
          </MovieProvider>
        </FavouriteProvider>
      </WatchLaterProvider>
    </ThemeProvider>
  );
}
