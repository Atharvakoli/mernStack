import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";
import { AuthContext } from "../context/AuthSystem";

const Logout = () => {
  const { logoutList, logoutError, logoutLoading, logoutUser } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user;
  const accessToken = location.state?.accessToken;

  const message = logoutList?.message;

  const [errors, setErrors] = useState("");

  const handleLogOut = async () => {
    try {
      await logoutUser(accessToken);
    } catch (error) {
      setErrors(
        `An error occurred during logout ${logoutError.message} Error ${error}`
      );
    }
    navigate("/", { state: { message } });
    const hasErrors = Object.values(logoutError).some(
      (errors) => errors !== ""
    );
    if (!hasErrors) {
      setErrors(`An error occurred during logout, ${logoutError.message}`);
    }
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="p-4 sm:p-10 bg-gray-50 rounded-md w-[300px] md:w-[500px] text-center overflow-y-auto">
        <span className="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
          <FiAlertTriangle size={70} />
        </span>
        <h3 className="mb-2 text-2xl font-bold text-gray-800">Sign out</h3>
        <p className="text-gray-500">
          Are you sure you would like to sign out of your account?
        </p>
        <div className="mt-6 flex justify-center gap-x-4">
          <button
            className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
            onClick={handleLogOut}
          >
            Sign out
          </button>
          <Link
            type="button"
            className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
            to={user ? `/${user.username}/features` : null}
          >
            Cancel
          </Link>
        </div>
        <div className="w-full mt-4 p-2 flex justify-around flex-col gap-5 sm:text-xl text-sm">
          {errors && (
            <>
              <div>
                <p className="text-red-500">{errors}</p>
              </div>
              <div>
                <Link to="/login" className="text-green-500">
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logout;
