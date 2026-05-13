import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VisitorLayout = () => {
  return (
    <div className="bg-[#fffdf8] text-gray-800">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default VisitorLayout;