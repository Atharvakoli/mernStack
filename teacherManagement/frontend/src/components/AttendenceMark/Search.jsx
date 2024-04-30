import React, { useContext } from "react";

import { MdOutlineIntegrationInstructions } from "react-icons/md";
import StudentSearch from "../StudentSearch";
import StudentEnrollNoSearch from "../StudentEnrollNoSearch";
import { Link, useLocation } from "react-router-dom";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../Loader";

const Search = () => {
  const location = useLocation();
  const searchData = location.state?.studentData;

  const { studentList, studentLoading, studentListing } =
    useContext(FeatureContext);

  let message = studentList?.message;

  if (studentLoading) {
    return <Loader size={70} />;
  }
  const student = studentListing.data;

  return (
    <>
      <div className="w-10/12 mx-auto mt-14 flex justify-around border-b-4 gap-2 relative ">
        <StudentEnrollNoSearch students={student} />

        <div className="border bg-green-400 p-2 rounded-md">
          {searchData?.length ? searchData.length : 0}
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div className="cursor-pointer relative group w-52 ">
          <div className="flex">
            <MdOutlineIntegrationInstructions size={30} />
            <span className="text-lg">INSTRUCTIONS</span>
            <div className="absolute top-8 left-10 shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] sm:w-[500px] text-sm">
              <div className="text-center mb-5">
                <h2>Welcome to Mark-Attendence Page!!</h2>
              </div>
              <div>
                <h2>On this page, you can perform following actions:</h2>
                <li>Mark Daily Attendance (P-Present , A-Absent )</li>
                <li>Mark Attendance for Back Dates.</li>
                <h1>
                  <span className="font-bold">Note:{"  "}</span>In case of
                  missing student data, extra student, or spelling correction,
                  Please click on student credentials.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 p-2 ">
          <Link to="student-credentials" className="text-md text-green-500">
            student-credentials
          </Link>
        </div>
      </div>
      <StudentSearch students={student} />
      <div className="w-60 p-2 right-0 left-32 relative">
        <p
          className={`${
            message ? "block" : "hidden"
          } bg-green-100 border w-72 border-red-400 text-green-700 sm:px-4 p-1 sm:py-3 rounded absolute right-10 top-20  sm:top-0 `}
        >
          {message}
        </p>
      </div>
    </>
  );
};

export default Search;
