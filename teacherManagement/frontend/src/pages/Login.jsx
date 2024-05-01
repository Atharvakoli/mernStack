import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiLoginBoxFill } from "react-icons/ri";
import Loader from "../components/Loader";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { AuthContext } from "../context/AuthSystem";
import axios from "axios";

const Login = () => {
  const { loginList, loginError, loginLoading, loginUser, refreshTokenError } =
    useContext(AuthContext);

  const [formData, setFormData] = useState({
    year: "",
    username: "",
    password: "",
  });
  const user = loginList?.data?.user?.username;
  const message = loginList?.message;
  const success = loginList?.success;
  const accessToken = loginList?.data?.accessToken;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(formData);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    setFormData({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const content = loginLoading ? (
    <Loader size={50} />
  ) : (
    <form className="my-6" onSubmit={handleSubmit}>
      {loginError?.message ? (
        <p className={`text-red-500 ${user ? "hidden" : "flex"} `}>
          {loginError?.message}
        </p>
      ) : null}
      <input
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        placeholder="Username..."
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
        placeholder="Password"
        type="password"
        value={formData.password}
        name="password"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-[100%]"
      >
        Login
      </button>
    </form>
  );

  return (
    <div className="w-full border h-screen flex items-center justify-center bg-black ">
      <div className="card px-8 py-6 rounded-lg bg-white w-[300px] md:w-[500px] mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <RiLoginBoxFill size={50} className="text-blue-400" />
          <h1 className="text-center font-bold text-3xl">Login</h1>
        </div>
        {content}
        <div className="flex justify-between  items-center w-full">
          <div>
            {loginError.message === "Request failed with status code 404" ? (
              <Link
                to="/register"
                className="text-md text-green-500 hover:underline"
              >
                Register
              </Link>
            ) : null}
          </div>
          <div className="flex items-center w-full justify-between">
            {success && loginList?.data?.user ? (
              <>
                <p className="text-md text-green-500 hover:underline ml-12">
                  {message}
                </p>
                <Link
                  to={`/${user}/features`}
                  className="text-md text-green-500 hover:underline"
                >
                  <span>
                    Features <FaArrowRightFromBracket size={30} />
                  </span>
                </Link>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
