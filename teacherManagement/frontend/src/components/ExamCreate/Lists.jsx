import React, { useContext } from "react";
import { FeatureContext } from "../../context/FeaturesSystem";
import { Link } from "react-router-dom";
import NoDataFound from "../NoDataFound";
import Loader from "../Loader";

const Lists = () => {
  const {
    allExamError,
    allExamList,
    allExamLoading,
    deleteExam,
    setAllExamList,
  } = useContext(FeatureContext);

  const data = { ...allExamList };
  let examList = data?.data;

  const handleDelete = async (id) => {
    await deleteExam(id);
    const data = examList.filter((list) => list._id !== id);
    setAllExamList((prevData) => ({
      ...prevData,
      data,
    }));
  };

  if (allExamError) {
    return <Error error={allExamError?.message} />;
  }
  if (allExamLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="w-full p-2">
        <Link
          to="examCheck"
          className="bg-green-400 rounded-md text-md p-2 cursor-pointer float-right "
        >
          Go to Search
        </Link>
      </div>
      <div className="flex flex-wrap -mx-3 mb-5 w-full">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          Date
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          Course Name
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Year
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Type Of Exam
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Exam Time
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Time In Minutes
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Semester
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Subject
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {examList ? (
                        examList.map((listItem) => (
                          <tr className="border-b font-thin text-sm border-dashed last:border-b-0">
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sm:text-sm text-xs">
                                  {listItem.date}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.courseName}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.year}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.typeOfExam}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.examTime}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.examDurationInMinutes}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.examNameInSemester}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <h1 className="sn:text-sm text-xs">
                                  {listItem.subject}
                                </h1>
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                                  <button className="bg-green-400 rounded-md text-md p-2 cursor-pointer">
                                    Delete
                                  </button>
                                  <div className="absolute shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] border bottom-0 right-8 ">
                                    <ul className="text-center">
                                      <li className="p-2 text-xs">
                                        Are you sure want to Delete
                                      </li>
                                      <li>
                                        <button
                                          className="text-sm w-full p-2 hover:bg-green-200 focus:text-lg"
                                          onClick={() =>
                                            handleDelete(listItem._id)
                                          }
                                        >
                                          Yes
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <NoDataFound />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
