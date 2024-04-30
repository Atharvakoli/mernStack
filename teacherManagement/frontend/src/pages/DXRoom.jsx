import React from "react";
import sendAssignment from "../../public/sendassignment.png";
import assignmentReport from "../../public/assignmentreport.png";
import recordedClass from "../../public/recording.jpeg";
import notes from "../../public/notes.jpeg";
import { Link } from "react-router-dom";

const DXRoom = () => {
  return (
    <>
      <div className="w-full border bg-slate-600 p-5 grid lg:grid-col-1 gap-5">
        <Link
          to="/send-assignments"
          className="border w-full flex items-center justify-center rounded-full bg-red-500 h-20 cursor-pointer"
        >
          <div className="w-1/3">
            <img src={sendAssignment} className="w-10 sm:w-14" alt="" />
          </div>
          <h1 className="text-sm text-bold sm:text-lg sm:font-bold">
            SEND ASSIGNMENTS
          </h1>
        </Link>
        <Link
          to="/teachers-messages"
          className="border w-full flex items-center justify-center rounded-full bg-green-400 h-20 cursor-pointer"
        >
          <div className="w-1/3">
            <img src={assignmentReport} className="w-10 sm:w-14" alt="" />
          </div>
          <h1 className="text-sm text-bold sm:text-lg sm:font-bold">
            Teacher's messages
          </h1>
        </Link>
        <Link
          to="/recorded-class"
          className="border w-full flex items-center justify-center rounded-full bg-blue-400 h-20 cursor-pointer"
        >
          <div className="w-1/3">
            <img src={recordedClass} className="w-10 sm:w-14" alt="" />
          </div>
          <h1 className="text-sm text-bold sm:text-lg sm:font-bold">
            RECORDED CLASS
          </h1>
        </Link>
        <Link
          to="/notes"
          className="border w-full flex items-center justify-center rounded-full bg-yellow-300 h-20 cursor-pointer "
        >
          <div className="w-1/3">
            <img src={notes} className="w-10 sm:w-14" alt="" />
          </div>
          <h1 className="text-sm text-bold sm:text-lg sm:font-bold">NOTES</h1>
        </Link>
      </div>
    </>
  );
};

export default DXRoom;
