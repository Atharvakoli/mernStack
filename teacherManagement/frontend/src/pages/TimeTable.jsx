import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { FeatureContext } from "../context/FeaturesSystem";
import Loader from "../components/Loader.jsx";

const TimeTable = () => {
  const {
    timetableError,
    timetableList,
    timetableLoading,
    allTimetableError,
    allTimetableList,
    allTimetableLoading,
    setAllTimetableList,
    createTimetable,
    getTimetable,
    deleteTimetable,
  } = useContext(FeatureContext);
  const [timetableFiles, setTimetableFiles] = useState(null);
  const [selected, setSelected] = useState({
    year: "",
    courseName: "",
    addTitle: "",
    addDescription: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(selected).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("timetableFiles", timetableFiles);

    await createTimetable(formData);
    setSelected({
      year: "",
      courseName: "",
      addTitle: "",
      addDescription: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  useEffect(() => {
    const getAllTimetable = async () => {
      await getTimetable();
    };
    getAllTimetable();
  }, []);

  const data = { ...allTimetableList };
  const timetableData = data?.data;

  const handleStudentToDelete = async (id) => {
    await deleteTimetable(id);
    const data = timetableData.filter((item) => item._id !== id);
    setAllTimetableList((prevData) => ({
      ...prevData,
      data,
    }));
  };

  return (
    <>
      <div className="w-full border-b-2 space-y-5">
        <div className="flex items-center mt-5 justify-center ">
          <AiOutlineCheck size={30} />
          <span className="sm:text-lg text-xs font-thin">TIMETABLE</span>
        </div>
      </div>
      <div className="w-full mt-5 border-b-2 p-10 border">
        <p
          className={`${
            timetableError?.message ? "block" : "hidden"
          } bg-red-100 border border-red-400 text-red-700 p-1 rounded absolute top-28`}
        >
          {timetableError?.message}
        </p>
        {timetableLoading && <Loader />}
        <p
          className={`${
            timetableList?.message ? "block" : "hidden"
          } bg-green-100 border w-72 border-red-400 text-green-700 px-4 py-3 rounded absolute top-28`}
        >
          {timetableList?.message}
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-2 text-lg place-content-center"
        >
          <div className="relative my-2 w-full sm:w-4/5">
            <select
              name="year"
              id="year"
              value={selected.year}
              onChange={handleChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                year
              </option>
              <option
                value="first year"
                selected={selected.year === "first year"}
              >
                FIRST YEAR
              </option>
              <option
                value="second year"
                selected={selected.year === "second year"}
              >
                SECOND YEAR
              </option>
              <option
                value="third year"
                selected={selected.year === "third year"}
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
          <div className="relative my-2 w-full sm:w-4/5">
            <select
              id="courseName"
              name="courseName"
              value={selected.courseName}
              onChange={handleChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            >
              <option value="" disabled>
                CourseName
              </option>
              <option value="fybca" selected={selected.courseName === "fybca"}>
                fybca
              </option>
              <option value="sybca" selected={selected.courseName === "sybca"}>
                sybca
              </option>
              <option value="tybca" selected={selected.courseName === "tybca"}>
                tybca
              </option>
              <option value="fybms" selected={selected.courseName === "fybms"}>
                fybms
              </option>
              <option value="sybms" selected={selected.courseName === "sybms"}>
                sybms
              </option>
              <option value="tybms" selected={selected.courseName === "tybms"}>
                tybms
              </option>
              <option
                value="fyb.sc"
                selected={selected.courseName === "fyb.sc"}
              >
                fyb.sc
              </option>
              <option
                value="syb.sc"
                selected={selected.courseName === "syb.sc"}
              >
                syb.sc
              </option>
              <option
                value="tyb.sc"
                selected={selected.courseName === "tyb.sc"}
              >
                tyb.sc
              </option>
              <option value="fybmm" selected={selected.courseName === "fybmm"}>
                fybmm
              </option>
              <option value="sybmm" selected={selected.courseName === "sybmm"}>
                sybmm
              </option>
              <option value="tybmm" selected={selected.courseName === "tybmm"}>
                tybmm
              </option>
              <option value="fybfm" selected={selected.courseName === "fybfm"}>
                fybfm
              </option>
              <option value="sybfm" selected={selected.courseName === "sybfm"}>
                sybfm
              </option>
              <option value="tybfm" selected={selected.courseName === "tybfm"}>
                tybfm
              </option>
              <option
                value="fyb.com"
                selected={selected.courseName === "fyb.com"}
              >
                fyb.com
              </option>
              <option
                value="syb.com"
                selected={selected.courseName === "syb.com"}
              >
                syb.com
              </option>
              <option
                value="tyb.com"
                selected={selected.courseName === "tyb.com"}
              >
                tyb.com
              </option>
              <option value="fybbi" selected={selected.courseName === "fybbi"}>
                fybbi
              </option>
              <option value="sybbi" selected={selected.courseName === "SYBBI"}>
                sybbi
              </option>
              <option value="tybbi" selected={selected.courseName === "tybbi"}>
                tybbi
              </option>
              <option value="fybfm" selected={selected.courseName === "fybfm"}>
                fybfm
              </option>
              <option value="sybfm" selected={selected.courseName === "sybfm"}>
                sybfm
              </option>
              <option value="tybfm" selected={selected.courseName === "tybfm"}>
                tybfm
              </option>
            </select>
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              courseName
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-2 w-full sm:w-4/5 ">
            <label htmlFor="timetableFiles">Attach File:</label>
            <input
              type="file"
              id="timetableFiles"
              name="timetableFiles"
              className="p-2 my-2 rounded w-[100%] focus:outline-blue-600"
              onChange={(e) => setTimetableFiles(e.target.files[0])}
              required
            />
          </div>
          <div className="relative my-2 w-full sm:w-4/5">
            <textarea
              name="addTitle"
              id="addTitle"
              cols="30"
              rows="10"
              value={selected.addTitle}
              onChange={handleChange}
              className="peer relative h-20 w-full appearance-none border-b border-slate-200 px-4 text-lg text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
            <label
              htmlFor="addTitle"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Add Title
            </label>
          </div>
          <div className="relative my-2 w-full sm:w-4/5">
            <textarea
              name="addDescription"
              id="addDescription"
              cols="30"
              rows="10"
              value={selected.addDescription}
              onChange={handleChange}
              className="peer relative h-20 w-full appearance-none border-b border-slate-200 px-4 text-lg text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
            <label
              htmlFor="addDescription"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Add Description
            </label>
          </div>
          <div className="relative my-2 w-full text-center sm:w-4/5">
            <button
              type="submit"
              className="bg-green-400 rounded-md w-full text-md p-2 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full px-3 mb-6 mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 pr-1 text-start min-w-[30px]">
                          Sr No.
                        </th>
                        <th className="pb-3 text-center min-w-[30px]">Title</th>
                        <th className="pb-3 text-center min-w-[130px] ">
                          courseName
                        </th>
                        <th className="pb-3 text-center min-w-[130px] ">
                          year
                        </th>
                        <th className="pb-3 text-center min-w-[130px] ">
                          description
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[135px]">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {timetableData &&
                        timetableData.map((data) => (
                          <tr className="border-b font-thin text-sm border-dashed last:border-b-0">
                            <td className="p-3 pl-0">
                              <div className="flex items-center">1</div>
                            </td>
                            <td className="p-3 pl-0">
                              <div className="flex items-center">
                                {data.addTitle}
                              </div>
                            </td>
                            <td className="p-3 pl-0">
                              <div className="flex items-center">
                                {data.courseName}
                              </div>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {data.year}
                              </span>
                            </td>
                            <td className="p-3 pl-0">
                              <div className="text-center ">
                                {data.addDescription}
                              </div>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                                  <button className="relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5">
                                    DELETE
                                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                  </button>
                                  <div className="absolute shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] border">
                                    <ul className="text-center">
                                      <li className="p-2 text-xs">
                                        Are you sure want to Delete
                                      </li>
                                      <button
                                        type="submit"
                                        className="group relative h-10 w-48 overflow-hidden rounded-xl bg-green-500 text-sm font-bold text-white sm:text-lg mt-5"
                                        onClick={() =>
                                          handleStudentToDelete(data._id)
                                        }
                                      >
                                        Yes
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                      </button>
                                    </ul>
                                  </div>
                                </li>
                              </span>
                            </td>
                          </tr>
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

export default TimeTable;
