import React, { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import StudentDetails from "../components/AttendenceMark/StudentDetails";
import { FeatureContext } from "../context/FeaturesSystem";
import { SiSentry } from "react-icons/si";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import StudentEnrollNoSearch from "../components/StudentEnrollNoSearch";
import Loader from "../components/Loader";
import Error from "../components/Error";
import CrudSearchList from "../components/AttendenceMark/CrudSearchList";

const StudentEntryAndUpdate = () => {
  const {
    studentLoading,
    studentListing,
    studentError,
    studentListingError,
    setStudentList,
    createStudent,
    updateStudent,
    deleteStudent,
  } = useContext(FeatureContext);
  const students = studentListing?.data;
  const [update, setUpdate] = useState(false);
  const [deleteStudents, setDeleteStudents] = useState(false);
  const [entry, setEntry] = useState(false);

  const handleEntry = () => {
    setEntry(!entry);
    if (update) {
      setUpdate(!update);
    } else if (deleteStudents) {
      setDeleteStudents(!deleteStudents);
    }
  };
  const handleUpdate = () => {
    setUpdate(!update);
    if (entry) {
      setEntry(!entry);
    } else if (deleteStudents) {
      setDeleteStudents(!deleteStudents);
    }
  };
  const handleDelete = () => {
    setDeleteStudents(!deleteStudents);
    if (update) {
      setUpdate(!update);
    } else if (entry) {
      setEntry(!entry);
    }
  };

  const [studentDetail, setStudentDetail] = useState(false);
  const [studentData, setStudentData] = useState([]);

  const error = studentListingError.message;

  return (
    <>
      <div className="w-full p-10 space-x-2">
        <div className="pt-4 w-full">
          <div className="flex items-center border-b-2 w-full text-xs sm:text-xl">
            <AiOutlineCheck size={30} />
            <span className="sm:text-lg text-xs font-thin">
              STUDENTS ENTRY UPDATE AND DELETE
            </span>
          </div>
          {error ? (
            <Error error={error} />
          ) : (
            <>
              <div className="flex items-center justify-around mt-5 w-full text-xs sm:text-xl sm:p-2 p-1 gap-4 ">
                <div className="flex items-center justify-center cursor-pointer">
                  <span
                    className="sm:text-lg text-xs font-thin rounded-xl bg-green-500 text-white flex sm:p-2 p-1 "
                    onClick={handleEntry}
                  >
                    STUDENTS ENTRY
                  </span>
                </div>
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={handleUpdate}
                >
                  <span className="sm:text-lg text-xs font-thin rounded-xl bg-green-500 text-white flex sm:p-2 p-1">
                    STUDENTS UPDATE
                  </span>
                </div>
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={handleDelete}
                >
                  <span className="sm:text-lg text-xs font-thin rounded-xl bg-green-500 text-white sm:p-2 flex p-1 ">
                    STUDENTS DELETE
                  </span>
                </div>
              </div>
              {entry && (
                <>
                  <div className="flex items-center justify-around border-b-2 mt-5 w-full text-xs sm:text-xl p-2 ">
                    <div className="flex items-center justify-center cursor-pointer">
                      <SiSentry size={30} />
                      <span className="sm:text-lg text-xs font-thin">
                        STUDENTS ENTRY
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-end ">
                    {studentLoading ? <Loader /> : null}
                  </div>
                  <StudentDetails
                    createStudent={createStudent}
                    studentError={studentError}
                  />
                </>
              )}
              {update && (
                <>
                  <div className="flex items-center justify-center border-b-2 mt-5 w-full text-xs sm:text-xl p-2 ">
                    <GrDocumentUpdate size={30} />
                    <span className="sm:text-lg text-xs font-thin">
                      STUDENTS UPDATE
                    </span>
                  </div>
                  <div className="flex items-center justify-end ">
                    {studentLoading ? <Loader /> : null}
                    <StudentEnrollNoSearch students={students} />
                  </div>
                  {!studentDetail ? (
                    <CrudSearchList
                      setStudentDetail={setStudentDetail}
                      studentDetail={studentDetail}
                      setStudentData={setStudentData}
                    />
                  ) : (
                    <StudentDetails
                      studentData={studentData}
                      loading={studentLoading}
                      updateStudent={updateStudent}
                    />
                  )}
                </>
              )}
              {deleteStudents && (
                <>
                  <div className="flex items-center justify-center border-b-2 mt-5 w-full text-xs sm:text-xl p-2">
                    <MdDelete size={30} />
                    <span className="sm:text-lg text-xs font-thin">
                      STUDENTS DELETE
                    </span>
                  </div>
                  <div className="flex items-center justify-end ">
                    <StudentEnrollNoSearch students={students} />
                    <p className="text-md text-red-500"></p>
                    {studentLoading ? <Loader /> : null}
                  </div>
                  <CrudSearchList
                    deleteToggleStudents={deleteStudents}
                    deleteStudent={deleteStudent}
                    setStudentList={setStudentList}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentEntryAndUpdate;
