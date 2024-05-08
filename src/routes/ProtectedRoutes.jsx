import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseAuthProvider";
import Loader from "../components/Loaders/Loader";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};
ProtectedRoutes.propTypes = {
  children: PropTypes.node,
};
export default ProtectedRoutes;
