import React from "react";
import { Link } from "react-router-dom";

const Feature = ({ feature, onClick }) => {
  const { img, name, navigate } = feature;

  return (
    <div className="sm:w-48 w-10/12 p-2 sm:h-48 rounded-lg shadow-lg flex items-center bg-white sm:justify-center ">
      <Link to={navigate}>
        <div className="gap-4 md:text-center sm:flex-col max-w-80 px-4 py-2 flex items-center justify-center">
          <div
            className="shadow-lg text-gray-400 p-2 rounded-lg"
            onClick={onClick}
          >
            <h1 className="text-red-300">{img}</h1>
          </div>
          <h1 className="text-sm sm:text-lg">{name}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Feature;
