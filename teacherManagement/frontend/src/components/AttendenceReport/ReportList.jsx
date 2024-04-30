import React from "react";

import { Link } from "react-router-dom";
const ReportList = ({ attendencedata }) => {
  const { lecture, date, year, courseName, presentData, absentData } =
    attendencedata;
  return (
    <>
      <tr className="border-b font-thin text-sm border-dashed last:border-b-0">
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sm:text-sm text-xs">{lecture}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{date}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{year}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{courseName}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <Link to="lists" state={{ presentData: presentData }}>
            <span className="bg-blue-300 rounded p-1 font-bold sm:p-2 cursor-pointer text-text sm:text-sm">
              Lists Of students
            </span>
          </Link>
        </td>
        <td className="p-3 pr-0 text-center">
          <Link to="lists" state={{ absentData: absentData }}>
            <span className="bg-blue-300 rounded p-1 font-bold sm:p-2 cursor-pointer text-text sm:text-sm">
              Lists Of students
            </span>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ReportList;
