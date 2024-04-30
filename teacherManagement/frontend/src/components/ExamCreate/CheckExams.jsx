import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

const CheckExams = () => {
  return (
    <>
      <div className="border-b-2 pb-1 ">
        <div className="flex mt-5 gap-2">
          <div className="flex items-center gap-2 justify-center font-thin ">
            <FaCheck size={20} />
            <h1>Lists Of Created Exam</h1>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default CheckExams;
