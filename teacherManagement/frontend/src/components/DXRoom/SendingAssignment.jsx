import React, { useContext, useEffect } from "react";
import { MdOutlineAssignment } from "react-icons/md";
import SelectedSearch from "./SelectedSearch";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../Loader";
import Error from "../Error";

const SendingAssignment = () => {
  const {
    studentsAssignmentLoading,
    studentsAssignmentsError,
    studentsAssignmentsList,
    assignments,
  } = useContext(FeatureContext);

  useEffect(() => {
    const handleAssignmentSubmit = async () => {
      await assignments();
    };
    handleAssignmentSubmit();
  }, []);

  const studentsAssignment = studentsAssignmentsList?.data;

  if (studentsAssignmentsError) {
    return <Error error={studentsAssignmentsError.message} />;
  }
  return (
    <>
      <div className="w-full p-10">
        <div className="border-b-2 pb-1">
          <div className="flex mt-5">
            <MdOutlineAssignment size={30} />
            <h1>SEND ASSIGNMENT</h1>
          </div>
        </div>
        <SelectedSearch />
        <div className="mt-10">
          <p
            className={`${
              studentsAssignmentsError?.message ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 p-2 rounded relative`}
          >
            {studentsAssignmentsError?.message}
          </p>
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
                          {studentsAssignmentLoading && <Loader />}
                          {studentsAssignment &&
                            studentsAssignment.map((student) => (
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
      </div>
    </>
  );
};

export default SendingAssignment;
