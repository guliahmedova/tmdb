import { Outlet } from "react-router-dom";
import Header from "../Header";

const PageLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
