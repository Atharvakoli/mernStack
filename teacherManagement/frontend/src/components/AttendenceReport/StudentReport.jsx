import Loader from "../Loader";
import Error from "../Error";
import ReportList from "../AttendenceReport/ReportList";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FeatureContext } from "../../context/FeaturesSystem";

const StudentReport = () => {
  const { attendList, attendListError, attendListLoading, AttendList } =
    useContext(FeatureContext);

  const attendenceList = attendList?.data;

  useEffect(() => {
    try {
      AttendList();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
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
                          Lecture
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          DATE
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          Year
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          CourseName
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[165px]">
                          Present Student's List
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[165px]">
                          Absent Student's List
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {attendListLoading && <Loader size={50} />}
                      {!attendListLoading && attendListError && (
                        <Error
                          error={attendListError.message}
                          statusCode={attendListError.statusCode}
                        />
                      )}
                      {attendenceList &&
                        attendenceList.map((data) => (
                          <ReportList key={data._id} attendencedata={data} />
                        ))}
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

export default StudentReport;
