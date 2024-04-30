import React, { useState } from "react";

import { useLocation } from "react-router-dom";

import { Navigate } from "react-router-dom";

const CrudSearchList = ({
  setStudentDetail,
  studentDetail,
  deleteToggleStudents,
  setStudentData,
  deleteStudent,
  setStudentListing,
}) => {
  const location = useLocation();
  let searchData = location.state?.studentData;

  const [error, setError] = useState();

  const handleStudentView = (id) => {
    setStudentData(searchData.filter((student) => student._id === id));
    setStudentDetail(!studentDetail);
  };

  const handleStudentToDelete = async (id) => {
    try {
      await deleteStudent(id);
      const data = searchData.filter((item) => item._id !== id);
      setStudentListing((prevData) => ({
        ...prevData,
        data,
      }));
      <Navigate
        to="/mark-attendence/student-credentials"
        state={{ from: location }}
        replace
      />;
    } catch (error) {
      setError(error);
    }
  };
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
                          <th className="pb-3 text-start min-w-[30px]">Year</th>
                          <th className="pb-3 text-start min-w-[30px]">
                            courseName
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
                                <div className="flex items-center ">
                                  {data.rollNo}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {data.enrollNo}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-start">
                                <span className="font-semibold text-light-inverse text-md/normal ">
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
                              <td className="p-3 pr-0 text-start relative">
                                <div className="relative flex flex-wrap items-center">
                                  {!deleteToggleStudents ? (
                                    <button
                                      className="group relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5"
                                      onClick={() =>
                                        handleStudentView(data._id)
                                      }
                                    >
                                      Update
                                      <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                    </button>
                                  ) : (
                                    <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                                      <button className="relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5">
                                        {!error ? "DELETE" : error.message}
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                      </button>
                                      <div className="absolute shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] border">
                                        <ul className="text-center">
                                          <li className="p-2 text-xs">
                                            Are you sure want to Delete
                                          </li>
                                          <button
                                            type="submit"
                                            className="group relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5"
                                            onClick={() =>
                                              handleStudentToDelete(data._id)
                                            }
                                          >
                                            Yes
                                            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                          </button>
                                        </ul>
                                      </div>
                                    </li>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr className="border-b font-thin text-sm border-dashed last:border-b-0 flex items-center justify-center">
                            <td className="p-3 pr-0 text-start "></td>
                            <td className="p-3 pr-0 text-start ">
                              <div className="text-2xl text-red-500">
                                NOT FOUND
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

export default CrudSearchList;
