import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Appoinment from "../pages/Appoinment/Appoinment";
import Checkout from "../pages/Checkout/Checkout";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import CartDetails from "../pages/CartDetails/CartDetails";
import Order from "../pages/Order/Order";
import Blogs from "../pages/Blog/Blogs";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/appoinment",
        element: <Appoinment />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/cart-details",
        element: <CartDetails />,
      },
      {
        path: "/all-orders",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    errorElement: <Error />,
    element: <Login />,
  },
  {
    path: "/register",
    errorElement: <Error />,
    element: <Register />,
  },
]);

export default Router;
