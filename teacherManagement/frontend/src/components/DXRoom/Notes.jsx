import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import SelectedSearch from "./SelectedSearch";
import { FeatureContext } from "../../context/FeaturesSystem";

import NoDataFound from "../NoDataFound.jsx";
import Error from "../Error.jsx";

const Notes = () => {
  const {
    studentsAssignmentsList,
    deleteStudent,
    setStudentsAssignmentsList,
    studentsAssignmentLoading,
    studentsAssignmentsError,
  } = useContext(FeatureContext);

  const data = studentsAssignmentsList;
  const assignmentCopy = { ...data };
  const assignments = assignmentCopy?.data;
  console.log(assignments);

  const [date, setDate] = useState({
    fromDate: "",
    toDate: "",
    courseName: "",
  });
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...date,
      [name]: value,
    });
  };
  function filterData(fromDate, toDate) {
    const filtered = [];
    const fDate = new Date(fromDate);
    const tDate = new Date(toDate);
    assignments.map((item, index) => {
      const currentDate = new Date(item.currentDate);
      if (
        currentDate >= fDate &&
        currentDate <= tDate &&
        item.courseName === courseName
      ) {
        filtered.push(dateArray[index]);
      }
    });
    setMessage(filtered);
  }
  const handleDateSubmit = (e) => {
    e.preventDefault();
    filterData(date.fromDate, date.toDate);
    setDate({
      fromDate: "",
      toDate: "",
      courseName: "",
    });
  };
  return (
    <>
      <div className="w-full p-10">
        <div className="border-b-2 pb-1 ">
          <div className="flex mt-5 gap-2">
            <div className="flex items-center gap-2 justify-center">
              <FaCheck size={20} />
              <h1>NOTES</h1>
            </div>
          </div>
        </div>
        <SelectedSearch />
        <div className="mx-auto w-full mt-5">
          <form
            onSubmit={handleDateSubmit}
            className="sm:w-full w-5/6 mx-auto grid sm:grid-cols-3 lg:grid-cols-4 place-content-center gap-15 p-2 text-lg"
          >
            <div className="relative my-6 w-72 sm:w-60 flex items-center justify-between">
              <h1>From</h1>
              <input
                type="date"
                name="fromDate"
                value={date.fromDate}
                onChange={handleDateChange}
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 sm:w-60  flex items-center justify-between">
              To
              <input
                type="date"
                name="toDate"
                value={date.toDate}
                onChange={handleDateChange}
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 sm:w-60">
              <input
                type="text"
                name="courseName"
                value={date.courseName}
                onChange={handleDateChange}
                placeholder="courseName..."
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 text-center sm:w-60">
              <button
                type="submit"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 pr-1 text-start min-w-[30px]">
                            Roll no.
                          </th>
                          <th className="pb-3 pr-1 text-start min-w-[30px]">
                            Students Name
                          </th>
                          <th className="pb-3 text-end min-w-[30px]">
                            Surname
                          </th>
                          <th className="pb-3 text-end min-w-[130px] ">
                            Course Name
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[135px]">
                            year
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[80px]">
                            subject
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {!studentsAssignmentLoading &&
                          studentsAssignmentsError && (
                            <Error error={studentsAssignmentsError.message} />
                          )}
                        {studentsAssignmentLoading && <Loader />}
                        {assignments &&
                          assignments.map((student) => (
                            <tr
                              key={student._id}
                              className="border-b font-thin text-sm border-dashed last:border-b-0"
                            >
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  {student.rollNo}
                                </div>
                              </td>
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  {student.studentsName}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-center">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {student.surName}
                                </span>
                              </td>
                              <td className="p-3 pl-0">
                                <div className="text-center ">
                                  {student.courseName}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-center">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {student.year}
                                </span>
                              </td>
                              <td className="p-3 pl-0">
                                <div className="text-center">
                                  {student.subject}
                                </div>
                              </td>
                              <td className="p-3 pl-0">
                                <div className="text-center">
                                  {student.description}
                                </div>
                              </td>
                            </tr>
                          ))}
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

export default Notes;
