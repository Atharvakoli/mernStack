import React, { useCallback, useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FeatureContext } from "../context/FeaturesSystem";

const StudentSearch = ({ students }) => {
  const { studentListingError } = useContext(FeatureContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState({
    year: "",
    courseName: "",
  });
  const handleSelectedSearch = useCallback(
    (value) => {
      if (value) {
        const filtered = students.filter(
          (option) =>
            option.year === value.year && option.courseName === value.courseName
        );
        navigate(`details`, {
          state: { studentData: filtered },
        });
      }
    },
    [students]
  );

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value.toLowerCase(),
    });
  };
  const handleOptionsSubmit = (e) => {
    e.preventDefault();
    handleSelectedSearch(selected);
    setSelected({
      year: "",
      courseName: "",
    });
  };
  return (
    <>
      <div className="w-full">
        <form
          className="sm:w-full w-5/6 grid sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-15 p-2 text-lg"
          onSubmit={!studentListingError ? handleOptionsSubmit : null}
        >
          <div className="relative my-6 w-72 mx-auto sm:w-60">
            <select
              name="year"
              id="year"
              value={selected.year}
              onChange={handleSelectChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                year
              </option>
              <option
                value="FIRST YEAR"
                selected={selected.year === "FIRST YEAR"}
              >
                FIRST YEAR
              </option>
              <option
                value="SECOND YEAR"
                selected={selected.year === "SECOND YEAR"}
              >
                SECOND YEAR
              </option>
              <option
                value="THIRD YEAR"
                selected={selected.year === "THIRD YEAR"}
              >
                THIRD YEAR
              </option>
            </select>
            <label
              htmlFor="year"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Year
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-6 w-72 mx-auto sm:w-60">
            <select
              id="courseName"
              name="courseName"
              value={selected.courseName}
              onChange={handleSelectChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                CourseName
              </option>
              <option value="FYBMS" selected={selected.courseName === "FYBMS"}>
                FYBMS
              </option>
              <option value="SYBMS" selected={selected.courseName === "SYBMS"}>
                SYBMS
              </option>
              <option value="TYBMS" selected={selected.courseName === "TYBMS"}>
                TYBMS
              </option>
              <option
                value="FYB.SC"
                selected={selected.courseName === "FYB.SC"}
              >
                FYB.Sc
              </option>
              <option
                value="SYB.SC"
                selected={selected.courseName === "SYB.SC"}
              >
                SYB.Sc
              </option>
              <option
                value="TYB.SC"
                selected={selected.courseName === "TYB.SC"}
              >
                TYB.Sc
              </option>
              <option value="FYBMM" selected={selected.courseName === "FYBMM"}>
                FYBMM
              </option>
              <option value="SYBMM" selected={selected.courseName === "SYBMM"}>
                SYBMM
              </option>
              <option value="TYBMM" selected={selected.courseName === "TYBMM"}>
                TYBMM
              </option>
              <option value="FYBFM" selected={selected.courseName === "FYBFM"}>
                FYBFM
              </option>
              <option value="SYBFM" selected={selected.courseName === "SYBFM"}>
                SYBFM
              </option>
              <option value="TYBFM" selected={selected.courseName === "TYBFM"}>
                TYBFM
              </option>
              <option
                value="FYB.COM"
                selected={selected.courseName === "FYB.COM"}
              >
                FYB.COM
              </option>
              <option
                value="SYB.COM"
                selected={selected.courseName === "SYB.COM"}
              >
                SYB.COM
              </option>
              <option
                value="TYB.COM"
                selected={selected.courseName === "TYB.COM"}
              >
                TYB.COM
              </option>
              <option value="FYBBI" selected={selected.courseName === "FYBBI"}>
                FYBBI
              </option>
              <option value="SYBBI" selected={selected.courseName === "SYBBI"}>
                SYBBI
              </option>
              <option value="TYBBI" selected={selected.courseName === "TYBBI"}>
                TYBBI
              </option>
              <option value="FYBAF" selected={selected.courseName === "FYBAF"}>
                FYBAF
              </option>
              <option value="SYBAF" selected={selected.courseName === "SYBAF"}>
                SYBAF
              </option>
              <option value="TYBAF" selected={selected.courseName === "TYBAF"}>
                TYBAF
              </option>
              <option value="FYBCA" selected={selected.courseName === "FYBCA"}>
                FYBCA
              </option>
              <option value="SYBCA" selected={selected.courseName === "SYBCA"}>
                SYBCA
              </option>
              <option value="TYBCA" selected={selected.courseName === "TYBCA"}>
                TYBCA
              </option>
            </select>
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              course Name
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-6 w-72 mx-auto text-center sm:w-60">
            <button
              type="submit"
              className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentSearch;
