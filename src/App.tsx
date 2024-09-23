import { Route, Routes } from "react-router-dom";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/Movie/Detail";
import NotFound from "./pages/NotFound";
import SearchResult from "./pages/SearchResult";
import Casts from "./shared/components/MovieDetail/Casts";
import PageLayout from "./shared/layout/PageLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/:id/cast" element={<Casts />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
