import React, { useCallback, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import P_A from "./P_A";

import { CiSearch } from "react-icons/ci";

const Lists = () => {
  const location = useLocation();
  const enrollInput = useRef();
  let presentData = location.state?.presentData;
  let absentData = location.state?.absentData;
  const [filterPresentData, setFilterPresentData] = useState(presentData);
  const [filterAbsentData, setFilterAbsentData] = useState(absentData);
  let enrollNumber;

  const handleEnroll = useCallback(
    (e) => {
      e.preventDefault();
      enrollNumber = enrollInput.current.value;
      if (presentData) {
        if (enrollNumber >= 100) {
          const presentFilter = presentData.filter(
            (field) => field.enrollNo === enrollNumber
          );
          setFilterPresentData(presentFilter);
        }
      } else if (absentData) {
        if (enrollNumber >= 100) {
          const absentFilter = absentData.filter(
            (field) => field.enrollNo === enrollNumber
          );
          setFilterAbsentData(absentFilter);
        }
      }
    },
    [enrollNumber]
  );

  return (
    <>
      <div className="w-full flex justify-around gap-5 items-center mt-2">
        <div className="text-center w-3/4 sm:w-2/4">
          <h1 className="text-xs sm:text-sm">
            {/* {medium}-{course}-{year}-{courseName} - ({}) */}
          </h1>
        </div>
        <div className="flex ml-4">
          <input
            type="number"
            placeholder="Enroll No.>= 100"
            ref={enrollInput}
            min={1}
            className="border text-xs rounded h-10 sm:w-52 w-32"
          />
          <CiSearch
            size={35}
            onClick={handleEnroll}
            className="bg-green-500 text-black h-10 p-1"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-400 rounded-md text-xs sm:text-sm p-2"
          >
            Export
          </button>
        </div>
      </div>
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
                          ROLL NO.
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-40 sm:min-w-[150px]">
                          ENROLL NO.
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          STUDENTS NAME
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          P??A
                        </th>
                        <th className="pb-3 text-xs sm:text-sm text-center w-80 sm:min-w-[100px]">
                          WEEK DAY
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterPresentData &&
                        filterPresentData.map((data) => (
                          <P_A key={data._id} student={data} />
                        ))}
                      {filterAbsentData &&
                        filterAbsentData.map((data) => (
                          <P_A key={data._id} student={data} />
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

export default Lists;
