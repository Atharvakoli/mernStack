import React, { useContext } from "react";

import StudentSearch from "../StudentSearch";
import { FeatureContext } from "../../context/FeaturesSystem";

const Search = () => {
  const { attendList, attendListError } = useContext(FeatureContext);
  const students = attendList?.data;

  return (
    <>
      {!attendListError ? (
        <StudentSearch students={students} />
      ) : (
        <p
          className={`${
            attendListError.message ? "block" : "hidden"
          } bg-red-100 border w-1/4 border-red-400 text-red-700 px-4 py-3 rounded relative`}
        >
          {attendListError.message}
        </p>
      )}
    </>
  );
};

export default Search;
