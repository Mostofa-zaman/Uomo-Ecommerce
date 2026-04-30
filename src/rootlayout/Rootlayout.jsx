import Footer from "@/component/common/Footer";
import Navbar from "@/component/common/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Rootlayout;
