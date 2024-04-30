import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { subjects } from "./subjectsData";
import { IoIosArrowDown } from "react-icons/io";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../Loader";

const RecordedClass = () => {
  const {
    recordedClass,
    allRecordedClasses,
    deleteRecordedClass,
    recordedClassError,
    recordedClassList,
    recordedClassLoading,
    allRecordedClassError,
    allRecordedClassList,
    allRecordedClassLoading,
    setAllRecordedClassList,
  } = useContext(FeatureContext);
  const [selected, setSelected] = useState({
    year: "",
    courseName: "",
    description: "",
    subject: "",
    videoUrl: "",
  });
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value.toLowerCase(),
      currentDate: new Date(),
    });
  };
  const handleOptionsSubmit = async (e) => {
    e.preventDefault();

    await recordedClass(selected);

    setSelected({
      year: "",
      courseName: "",
      description: "",
      subject: "",
      videoUrl: "",
    });
  };

  function filterSubjectByKey(key) {
    const filteredSubject = subjects.filter((subject) => key in subject);
    if (filteredSubject.length > 0) {
      return filteredSubject.map((subject) => subject[key])[0];
    } else {
      return null;
    }
  }
  const subject = filterSubjectByKey(selected.courseName);

  useEffect(() => {
    const handleFetch = async () => {
      await allRecordedClasses();
    };
    handleFetch();
  }, []);

  const recordedDataCopy = { ...allRecordedClassList };
  let recordedClassData = recordedDataCopy?.data;

  const handleDelete = async (id) => {
    await deleteRecordedClass(id);
    const data = recordedClassData.filter((item) => item._id === id);
    setAllRecordedClassList((prev) => ({
      ...prev,
      data,
    }));
  };

  return (
    <>
      <div className="w-full p-10">
        <div className="border-b-2 pb-1 ">
          <div className="flex mt-5 gap-2">
            <div className="flex items-center gap-2 justify-center">
              <FaCheck size={20} />
              <h1>RECORDED CLASS</h1>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <p
            className={`${
              recordedClassError?.message ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative`}
          >
            {recordedClassError?.message}
          </p>
          <p
            className={`${
              allRecordedClassError?.message ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative`}
          >
            {allRecordedClassError?.message}
          </p>
          <p
            className={`${
              recordedClassList?.message ? "block" : "hidden"
            } bg-green-100 border border-red-400 text-green-700 px-1 text-xs py-1 rounded relative`}
          >
            {recordedClassList?.message}
          </p>
          <form
            className="items-center place-content-center mx-auto grid lg:grid-cols-2 p-2 text-lg shadow-lg mt-10 gap-2p-4 sm:p-10 bg-gray-50 rounded-md w-[300px] md:w-[600px] text-center overflow-y-auto "
            onSubmit={handleOptionsSubmit}
          >
            <div className="relative my-2 w-72 sm:w-60">
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
            <div className="relative my-2 w-72 sm:w-60">
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
                <option
                  value="fybca"
                  selected={selected.courseName === "fybca"}
                >
                  fybca
                </option>
                <option
                  value="sybca"
                  selected={selected.courseName === "sybca"}
                >
                  sybca
                </option>
                <option
                  value="tybca"
                  selected={selected.courseName === "tybca"}
                >
                  tybca
                </option>
                <option
                  value="fybms"
                  selected={selected.courseName === "fybms"}
                >
                  fybms
                </option>
                <option
                  value="sybms"
                  selected={selected.courseName === "sybms"}
                >
                  sybms
                </option>
                <option
                  value="tybms"
                  selected={selected.courseName === "tybms"}
                >
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
                <option
                  value="fybmm"
                  selected={selected.courseName === "fybmm"}
                >
                  fybmm
                </option>
                <option
                  value="sybmm"
                  selected={selected.courseName === "sybmm"}
                >
                  sybmm
                </option>
                <option
                  value="tybmm"
                  selected={selected.courseName === "tybmm"}
                >
                  tybmm
                </option>
                <option
                  value="fybfm"
                  selected={selected.courseName === "fybfm"}
                >
                  fybfm
                </option>
                <option
                  value="sybfm"
                  selected={selected.courseName === "sybfm"}
                >
                  sybfm
                </option>
                <option
                  value="tybfm"
                  selected={selected.courseName === "tybfm"}
                >
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
                <option
                  value="fybbi"
                  selected={selected.courseName === "fybbi"}
                >
                  fybbi
                </option>
                <option
                  value="sybbi"
                  selected={selected.courseName === "SYBBI"}
                >
                  sybbi
                </option>
                <option
                  value="tybbi"
                  selected={selected.courseName === "tybbi"}
                >
                  tybbi
                </option>
                <option
                  value="fybfm"
                  selected={selected.courseName === "fybfm"}
                >
                  fybfm
                </option>
                <option
                  value="sybfm"
                  selected={selected.courseName === "sybfm"}
                >
                  sybfm
                </option>
                <option
                  value="tybfm"
                  selected={selected.courseName === "tybfm"}
                >
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
            {subject && (
              <div className="relative my-2 w-72 sm:w-60">
                <select
                  name="subject"
                  id="subject"
                  value={selected.subject}
                  onChange={handleSelectChange}
                  required
                  className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                >
                  <option value="" disabled>
                    subject
                  </option>
                  <option
                    value={subject[0]}
                    selected={selected.subject === subject[0]}
                  >
                    {subject[0]}
                  </option>
                  <option
                    value={subject[1]}
                    selected={selected.subject === subject[1]}
                  >
                    {subject[1]}
                  </option>
                  <option
                    value={subject[2]}
                    selected={selected.subject === subject[2]}
                  >
                    {subject[2]}
                  </option>
                  <option
                    value={subject[3]}
                    selected={selected.subject === subject[3]}
                  >
                    {subject[3]}
                  </option>
                  <option
                    value={subject[4]}
                    selected={selected.subject === subject[4]}
                  >
                    {subject[4]}
                  </option>
                  {subject.length > 5 ? (
                    <>
                      <option
                        value={subject[5]}
                        selected={selected.subject === subject[5]}
                      >
                        {subject[5]}
                      </option>
                      <option
                        value={subject[6]}
                        selected={selected.subject === subject[6]}
                      >
                        {subject[6]}
                      </option>
                    </>
                  ) : null}
                  {subject.length > 7 ? (
                    <>
                      <option
                        value={subject[7]}
                        selected={selected.subject === subject[7]}
                      >
                        {subject[7]}
                      </option>
                    </>
                  ) : null}
                </select>
                <label
                  htmlFor="subject"
                  className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                >
                  subject
                </label>
                <IoIosArrowDown
                  className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
                  size={30}
                />
              </div>
            )}
            <div className="relative my-2 w-72 sm:w-60">
              <input
                type="text"
                name="videoUrl"
                id="videoUrl"
                value={selected.videoUrl}
                onChange={handleSelectChange}
                autoComplete="off"
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="videoUrl"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Video Url
              </label>
            </div>
            <div className="relative my-2 w-72 sm:w-60">
              <textarea
                name="description"
                id="description"
                cols="28"
                value={selected.description}
                rows="2"
                placeholder="Some Description"
                onChange={handleSelectChange}
              ></textarea>
            </div>
            <div className="relative my-2 w-72er-green-500 sm:w-60">
              <button
                type="submit"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                submit
              </button>
            </div>
            {recordedClassLoading && <Loader />}
          </form>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full max-w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 pr-1 text-start min-w-[10px]">
                            Sr No.
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Date
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            courseName
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Description
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            view
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allRecordedClassLoading && <Loader />}
                        {recordedClassData &&
                          recordedClassData.map((record) => (
                            <tr
                              key={record._id}
                              className="border-b font-thin sm:text-sm text-text "
                            >
                              <td className="p-3 pl-0 max-w-[10px]">
                                <div className="flex items-center ">
                                  {recordedClassData.length - 1}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-center">
                                <span className="">{record.currentDate}</span>
                              </td>
                              <td className="p-3 pr-12 text-center">
                                <span className=" ">{record.courseName}</span>
                              </td>
                              <td className="pr-0 text-center">
                                <span className="font-semibold p-2">
                                  {record.description}
                                </span>
                              </td>
                              <td className="pr-0 text-center">
                                <a
                                  href={record.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold"
                                >
                                  <button className="bg-green-400 rounded-md text-md p-2 cursor-pointer">
                                    View
                                  </button>
                                </a>
                              </td>
                              <td className="p-3 pr-0 text-center">
                                <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                                  <button className="bg-green-400 rounded-md text-md p-2 cursor-pointer">
                                    Delete
                                  </button>
                                  <div className="absolute shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] border bottom-0 right-8 ">
                                    <ul className="text-center">
                                      <li className="p-2 text-xs">
                                        Are you sure want to Delete
                                      </li>
                                      <li>
                                        <button
                                          className="text-sm w-full p-2 hover:bg-green-200 focus:text-lg"
                                          onClick={() =>
                                            handleDelete(record._id)
                                          }
                                        >
                                          Yes
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
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
      </div>
    </>
  );
};

export default RecordedClass;
