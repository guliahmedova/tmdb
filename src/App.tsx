import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Account/Favorite";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/Movie/Detail";
import NotFound from "./pages/NotFound";
import SearchResult from "./pages/SearchResult";
import Casts from "./shared/components/MovieDetail/Casts";
import PageLayout from "./shared/layout/PageLayout";
import People from "./pages/People";

const App = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/filter/:path" element={<Filter />} />
        <Route path="/:id/cast" element={<Casts />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/search/:category" element={<SearchResult />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/person" element={<People />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
