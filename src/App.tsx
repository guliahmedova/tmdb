import { Route, Routes } from "react-router-dom";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/Movie/Detail";
import NotFound from "./pages/NotFound";
import SearchResult from "./pages/SearchResult";
import PageLayout from "./shared/layout/PageLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route index path="/filter" element={<Filter />} />
        <Route index path="/search" element={<SearchResult />} />
        <Route index path="/login" element={<Login />} />
      </Route>
      <Route index path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
