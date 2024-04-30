import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { FeatureContext } from "../../context/FeaturesSystem";
import Error from "../Error";
import Loader from "../Loader";
import Popup from "../Popup";
import useLocalStorage from "../../customHook/UseLocalStorageHook";

const StudentsSearchList = () => {
  const { studentListingError, studentListingLoading } =
    useContext(FeatureContext);
  const { setLocalStorage, getLocalStorage, removeLocalStorage } =
    useLocalStorage("popup");

  const location = useLocation();
  const searchData = location.state?.studentData;

  if (studentListingError) {
    return <Error error={studentListingError.message} />;
  }
  if (studentListingLoading) {
    return <Loader size={40} />;
  }
  const [showModalPopup, setShowModalPopup] = useState(false);
  useEffect(() => {
    const data = getLocalStorage();
    setShowModalPopup(data);
  }, []);

  const [filteredOne, setFilteredOne] = useState([]);

  function handleToggleModalPopup(id) {
    setShowModalPopup(!showModalPopup);
    setLocalStorage(!showModalPopup);
    const filterOne = searchData.filter((student) => student._id === id);
    setFilteredOne(filterOne);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 shadow-lg">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 text-start min-w-[50px] p-2 text-xs sm:text-lg">
                            Roll No.
                          </th>
                          <th className="pb-3 text-start min-w-[50px] p-2 text-xs sm:text-lg">
                            Enroll No.
                          </th>
                          <th className="pb-3 text-start min-w-[50px]  p-2 text-xs sm:text-lg">
                            Student's Name
                          </th>
                          <th className="pb-3 text-start min-w-[50px] p-2 text-xs sm:text-lg">
                            Year
                          </th>
                          <th className="pb-3 text-start min-w-[50px] p-2 text-xs sm:text-lg">
                            courseName
                          </th>
                          <th className="pb-3 text-start min-w-[50px] p-2 text-xs sm:text-lg">
                            profile
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchData && searchData?.length > 0 ? (
                          searchData.map((data) => (
                            <tr
                              key={data._id}
                              className="border-b font-thin text-sm border-dashed last:border-b-0"
                            >
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  {data.rollNo}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.enrollNo}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.studentsName}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.year}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.courseName}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal cursor-pointer relative w-52">
                                  <div className="flex">
                                    {/* <MdOutlineIntegrationInstructions
                                        size={30}
                                      /> */}
                                    <span
                                      className="bg-green-400 rounded-md text-md p-2 cursor-pointer "
                                      onClick={() =>
                                        handleToggleModalPopup(data._id)
                                      }
                                    >
                                      VIEW
                                    </span>
                                    <div className="absolute top-8 left-10 rounded-md p-2 z-50 text-black text-sm">
                                      {showModalPopup && (
                                        <Popup
                                          students={filteredOne}
                                          studentListingError={
                                            studentListingError
                                          }
                                          studentListingLoading={
                                            studentListingLoading
                                          }
                                          onClose={onClose}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="border-b font-thin text-sm border-dashed last:border-b-0 flex items-center justify-center">
                            <td className="p-3 pr-0 text-start "></td>
                            <td className="p-3 pr-0 text-start ">
                              <div className="sm:text-xl text-xs  text-red-500">
                                {studentListingError ? (
                                  <>
                                    <p
                                      className={`${
                                        studentListingError ? "block" : "hidden"
                                      } bg-red-100 border w-60 border-red-400 text-red-700 px-4 py-3 rounded relative sm:text-md text-xs`}
                                    >
                                      {studentListingError.message}
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <p className="bg-green-100 border w-60 border-red-400 text-green-700 px-4 py-3 rounded relative text-xs sm:text-md">
                                      SEARCH YOUR CREDENTIALS
                                    </p>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsSearchList;
