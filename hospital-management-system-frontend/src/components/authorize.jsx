import { Navigate, Outlet } from "react-router-dom";

const Authorize = ({ expectedRole }) => {
  const token = localStorage.getItem("token");
  console.log("token is ", token);

  const role = localStorage.getItem("role");
  if (token && role === expectedRole) {
    return <Outlet />;
  } else {
    <Navigate to="/login" />;
  }
};
export default Authorize;
