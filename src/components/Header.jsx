import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/FirebaseAuthProvider";
import { Bounce, toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlelogOut = () => {
    logOut();
    toast.success("Logout Success", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <header className="w-full bg-primary shadow-md shadow-b-[5px] -shadow-spread-2">
      <div className="navbar max-w-[1536px] mx-auto justify-between flex items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        <div className="navbar-start">
          <Link to={"/"} className="">
            <img
              src="/assets/logo.png"
              className="max-w-[110px] sm:max-w-[130px] md:max-w-[150px] xl:max-w-[180px] max-h-[60px]"
              alt="logo"
            />
          </Link>
        </div>
        {/* desktop-menu */}
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-3 lg:gap-[25px] xl:gap-[30px]">
            <li>
              <NavLink
                to={"/"}
                className="text-secondary  font-medium hover:text-[#FF3811] transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className="text-secondary  font-medium hover:text-[#FF3811] transition-colors"
              >
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to={"/services"}
                className="text-secondary  font-medium hover:text-[#FF3811] transition-colors"
              >
                Services
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to={"/blogs"}
                className="text-secondary  font-medium hover:text-[#FF3811] transition-colors"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-secondary  font-medium hover:text-[#FF3811] transition-colors"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* desktop-menu */}

        <div className="navbar-end">
          <div className="flex items-center justify-end gap-2">
            {/* search & cart*/}
            <Link to={"/cart-details"}>
              <img src="/assets/cart.svg" alt="cart" />
            </Link>
            <div>
              <img src="/assets/search.svg" alt="img" />
            </div>
            {/* search & cart*/}
            {/* Profile */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center justify-center rounded-full avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="avatar"
                    className="object cover "
                    src={`${user?.photoURL || "/assets/avatar.svg"} `}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[999] px-3 py-4 shadow bg-base-100 rounded-box w-52"
              >
                <li className="pl-2 my-2 text-left text-secondary">Profile</li>
                {user ? (
                  <button
                    onClick={() => handlelogOut()}
                    className="pl-2 my-2 text-left cursor-pointer text-secondary"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to={"/login"}
                    className="pl-2 my-2 text-left cursor-pointer text-secondary"
                  >
                    Login
                  </Link>
                )}
              </ul>
            </div>
            {/* Profile */}

            <Link
              to={"/appoinment"}
              className="hidden sm:flex px-4  py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]"
            >
              Appoinment
            </Link>
          </div>

          {/* drawer */}
          <div className="z-50 drawer drawer-end w-fit">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button lg:hidden">
                <img
                  className="w-8 h-8 ml-1 sm:w-10 sm:h-10 sm:ml-2"
                  src="/assets/navicon.svg"
                  alt="icon"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* mobile */}
              <div>
                <Link href={"/"} className="">
                  <img
                    src="/assets/logo.webp"
                    className="max-w-[130px] md:max-w-[150px] xl:max-w-[180px]"
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className="w-64 min-h-screen px-2 sm:w-72 right-2 bg-[#F2F2F2] text-secondary-content">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                >
                  <img
                    src="/assets/closeBtn.svg"
                    className="w-8 h-8 mt-2 mb-8"
                    alt="icon"
                  />
                </label>
                <li className="mb-5 ">
                  <NavLink
                    to={"/"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#FF3811] transition-colors"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/about"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#FF3811] transition-colors"
                  >
                    About
                  </NavLink>
                </li>
                {/* <li className="mb-5 ">
                  <NavLink
                    to={"/services"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#FF3811] transition-colors"
                  >
                    Services
                  </NavLink>
                </li> */}
                <li className="mb-5 ">
                  <NavLink
                    to={"/blogs"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#FF3811] transition-colors"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <NavLink
                    to={"/contact"}
                    className="my-1 text-[#1e1e1e] border border-transparent  font-medium hover:text-[#FF3811] transition-colors"
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="mb-5 ">
                  <Link
                    to={"/appoinment"}
                    className="sm:hidden text-center flex px-4  py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]"
                  >
                    Appoinment
                  </Link>
                </li>
              </ul>
              {/* mobile */}
            </div>
          </div>
          {/* drawer */}
        </div>
      </div>
    </header>
  );
};

export default Header;
