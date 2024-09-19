import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./shared/layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
