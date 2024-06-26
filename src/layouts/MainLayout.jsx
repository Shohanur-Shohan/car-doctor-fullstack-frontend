import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;
