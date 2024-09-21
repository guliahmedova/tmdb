import { Route, Routes } from "react-router-dom";
import Header from "./shared/layout/Header";
import Home from "./pages/Movie";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
