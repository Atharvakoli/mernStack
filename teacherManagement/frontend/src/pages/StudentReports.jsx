import React, { useContext, useEffect } from "react";

import { AiOutlineCheck } from "react-icons/ai";
import Search from "../components/StudentsReports/Search";
import StudentEnrollSearch from "../components/StudentEnrollNoSearch";
import StudentsSearchList from "../components/StudentsReports/StudentsSearchList";
import { FeatureContext } from "../context/FeaturesSystem";
import Loader from "../components/Loader";

const StudentReports = () => {
  const {
    studentListing,
    Students,
    studentListingError,
    studentListingLoading,
  } = useContext(FeatureContext);
  const students = studentListing.data;

  useEffect(() => {
    try {
      Students();
    } catch (error) {
      console.error(error);
    }
  }, []);

  if (studentListingLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="border w-full p-10 space-x-2">
        <div className="flex items-center pt-4 w-full">
          <div className="flex items-center justify-center w-60 text-xs sm:text-xl">
            <AiOutlineCheck size={40} />
            <span className="sm:text-lg text-xs font-thin">
              STUDENTS REPORT
            </span>
          </div>
          {!studentListingError.message ? (
            <StudentEnrollSearch students={students} />
          ) : (
            <p
              className={`${
                studentListingError.message ? "block" : "hidden"
              } bg-red-100 border w-1/4 border-red-400 text-red-700 px-4 py-3 rounded relative`}
            >
              {studentListingError.message}
            </p>
          )}
        </div>
        <div className="w-full border-t-2 mt-4 border-b-2">
          {!studentListingError.message ? (
            <Search students={students} />
          ) : (
            <p
              className={`${
                studentListingError.message ? "block" : "hidden"
              } bg-red-100 border w-1/4 border-red-400 text-red-700 px-4 py-3 rounded relative`}
            >
              {studentListingError.message}
            </p>
          )}
        </div>
        <StudentsSearchList />
      </div>
    </>
  );
};

export default StudentReports;
