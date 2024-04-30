import React from "react";

const P_A = ({ student }) => {
  const { rollNo, enrollNo, studentsName, present, weekDay } = student;
  let presentStudent;
  if (present) {
    presentStudent = "PRESENT";
  } else {
    presentStudent = "ABSENT";
  }
  return (
    <>
      <tr className="border-b font-thin text-sm border-dashed last:border-b-0">
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sm:text-sm text-xs">{rollNo}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{enrollNo}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{studentsName}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{presentStudent}</h1>
          </span>
        </td>
        <td className="p-3 pr-0 text-center">
          <span className="font-semibold text-light-inverse text-md/normal">
            <h1 className="sn:text-sm text-xs">{weekDay}</h1>
          </span>
        </td>
      </tr>
    </>
  );
};

export default P_A;
