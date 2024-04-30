import React, { useContext, useEffect, useState } from "react";
import AttendenceList from "./AttendenceList";

import Loader from "../Loader";
import Error from "../Error";
import { FeatureContext } from "../../context/FeaturesSystem";
import NoDataFound from "../NoDataFound";

const StudentInfo = () => {
  const {
    studentListing,
    studentListingError,
    studentListingLoading,
    Students,
  } = useContext(FeatureContext);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      Students();
    } catch (error) {
      setError(error);
    }
  }, []);

  const studentDetails = studentListing?.data;

  if (studentListingError) {
    return <Error error={studentListingError.message} />;
  }
  if (studentListingLoading) {
    return <Loader size={40} />;
  }

  return (
    <div className="flex flex-wrap mb-5">
      <div className="w-full px-3 mb-6 mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                  <thead className="align-bottom">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 pr-1 text-start min-w-[30px]">
                        Roll No.
                      </th>
                      <th className="pb-3 text-end min-w-[30px]">Enroll No.</th>
                      <th className="pb-3 text-end min-w-[130px] ">
                        Student's Name
                      </th>
                      <th className="pb-3 pr-12 text-end min-w-[135px]">
                        Medium
                      </th>
                      <th className="pb-3 pr-12 text-end min-w-[80px]">Year</th>
                      <th className="pb-3 text-center min-w-[50px]">Course</th>
                      <th className="pb-3 text-center min-w-[100px]">
                        CourseName
                      </th>
                      <th className="pb-3 pl-2 pr-10 text-center min-w-[50px]">
                        Section
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentDetails ? (
                      <>
                        {studentDetails.map((fromData) => (
                          <AttendenceList
                            key={fromData._id}
                            formData={fromData}
                          />
                        ))}
                      </>
                    ) : (
                      <NoDataFound size={70} />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
