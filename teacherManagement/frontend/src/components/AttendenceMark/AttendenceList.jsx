import React from "react";

const AttendenceList = ({ formData }) => {
  const {
    rollNo,
    enrollNo,
    studentsName,
    medium,
    year,
    course,
    courseName,
    section,
  } = formData;
  return (
    <>
      <tr className="border-b font-thin text-sm border-dashed last:border-b-0">
        <td className="p-3 pl-0">
          <div className="flex items-center">{rollNo}</div>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            {enrollNo}
          </span>
        </td>
        <td className="p-3 pr-0 text-end">
          <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
            {studentsName}
          </span>
        </td>
        <td className="p-3 pr-12 text-end">
          <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
            {medium}
          </span>
        </td>
        <td className="pr-0 text-start">
          <span className="font-semibold text-light-inverse text-md/normal">
            {year}
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0">
            {course}
          </span>
        </td>
        <td className="pr-0 text-center">
          <span className="font-semibold text-light-inverse">{courseName}</span>
        </td>
        <td className="pr-0 text-center">
          <span className="font-semibold text-light-inverse ">{section}</span>
        </td>
      </tr>
    </>
  );
};

export default AttendenceList;
