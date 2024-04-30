import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthSystem";
import useLocalStorage from "../customHook/UseLocalStorageHook";

const RequireAuth = () => {
  const location = useLocation();
  const { getLocalStorage } = useLocalStorage("fetchedData");
  const { loginList } = useContext(AuthContext);

  const authToken = getLocalStorage();
  const accessToken = loginList?.data?.accessToken;

  return (
    <>
      {authToken?.data?.accessToken || accessToken ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
