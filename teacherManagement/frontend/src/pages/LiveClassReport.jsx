import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Search from "../components/AttendenceReport/Search";
import { Outlet } from "react-router-dom";
const LiveClassReport = () => {
  return (
    <>
      <div className="border w-full p-10 space-x-2">
        <div className="flex items-center pt-4 w-full">
          <AiOutlineCheck size={40} />
          <span className="sm:text-lg text-xs font-thin">
            ATTENDENCE REPORT
          </span>
        </div>
        <div className="w-full border-t-2 border-b-2">{<Search />}</div>
        <Outlet />
      </div>
    </>
  );
};

export default LiveClassReport;
