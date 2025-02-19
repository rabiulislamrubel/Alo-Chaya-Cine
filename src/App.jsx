import { Route, Routes } from "react-router";
import ComingSoon from "./components/ComingSoon";
import ContextProvider from "./components/ContextProvider";
import Favourite from "./components/Favourite";
import NewReleases from "./components/NewReleases";
import WatchLater from "./components/WatchLater";
import Page from "./Page";
import TrendingMovieList from "./TrendingMovieList";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<TrendingMovieList />} />
            <Route path="/new_release" element={<NewReleases />} />
            <Route path="/coming_soon" element={<ComingSoon />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/watch_later" element={<WatchLater />} />
          </Route>
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
