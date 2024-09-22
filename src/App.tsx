import { Route, Routes } from "react-router-dom";
import Header from "./shared/layout/Header";
import Home from "./pages/Movie";
import SearchResult from "./pages/SearchResult";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/search" element={<SearchResult />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
