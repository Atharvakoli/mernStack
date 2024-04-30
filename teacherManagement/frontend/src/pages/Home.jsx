import React from "react";
import Welcome from "../components/Welcome";
import { Navigate, useLocation } from "react-router-dom";
// import Footer from './'

const Home = () => {
  const location = useLocation();
  const authToken = location.state?.accessToken;

  return (
    <>
      {/* {authToken ? ( */}
        <Welcome />
      {/* ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )} */}
    </>
  );
};

export default Home;
