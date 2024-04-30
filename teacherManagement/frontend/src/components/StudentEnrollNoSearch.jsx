import React, { useRef, useState, useCallback, useContext } from "react";

import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FeatureContext } from "../context/FeaturesSystem";

const StudentEnrollNoSearch = ({ students }) => {
  const { studentListingError } = useContext(FeatureContext);
  const navigate = useNavigate();
  const enrollInput = useRef();
  let enrollNumber;
  const [hasError, setHasError] = useState("");
  const handleEnroll = useCallback(
    (e) => {
      e.preventDefault();
      enrollNumber = enrollInput.current.value;
      if (students) {
        if (enrollNumber >= 100) {
          const filter = students.filter(
            (field) => field.enrollNo === enrollNumber
          );
          navigate(`studentEnrollNo/${enrollNumber}`, {
            state: { studentData: filter },
          });
          enrollInput.current.value = "";
          setHasError("");
        } else {
          setHasError("Enroll number should be greater then or equal to 100");
        }
      }
    },
    [enrollInput.current]
  );

  return (
    <>
      <div className="flex items-start sm:gap-20 w-full">
        <div className="flex ml-2">
          <input
            type="number"
            placeholder="Enroll No.>= 100"
            ref={enrollInput}
            min={1}
            className="border text-xs rounded h-10 sm:w-72 w-32"
          />
          <CiSearch
            size={35}
            onClick={
              !studentListingError.message ? (
                handleEnroll
              ) : (
                <p
                  className={`${
                    studentListingError.message ? "block" : "hidden"
                  } bg-red-100 border w-80 border-red-400 text-red-700 px-4 py-3 rounded relative`}
                >
                  {studentListingError.message}
                </p>
              )
            }
            className="bg-green-500 text-black h-10 p-1"
          />
          <p
            className={`${
              hasError ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`}
          >
            {hasError}
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentEnrollNoSearch;
