import React, { useState } from "react";

import Search from "../components/AttendenceMark/Search";

import { Outlet } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const AttendenceMark = () => {
  return (
    <>
      <div className="w-full border space-y-5">
        <div className="flex items-center mt-5 justify-center ">
          <AiOutlineCheck size={30} />
          <span className="sm:text-lg text-xs font-thin">MARK ATTENDENCE</span>
        </div>
        <Search />
        <div className="mx-auto font-thin text-sm sm:text-xl flex items-center justify-center">
          <span>LIST OF STUDENTS</span>
        </div>
        <div className="border-t-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AttendenceMark;
