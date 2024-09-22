import { Route, Routes } from "react-router-dom";
import Header from "./shared/layout/Header";
import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";
import MovieDetail from "./pages/Movie/Detail";
import Filter from "./pages/Filter";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/movie/:id" element={<MovieDetail />} />
          <Route index path="/filter" element={<Filter />} />
          <Route index path="/search" element={<SearchResult />} />
          <Route index path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
