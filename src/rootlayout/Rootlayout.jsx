import { Outlet } from "react-router-dom";

import Navbar from "@/component/common/navbar/Navbar";
import Footer from "@/component/common/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;