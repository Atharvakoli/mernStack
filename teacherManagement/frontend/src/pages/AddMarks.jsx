import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { subjects } from "../components/DXRoom/subjectsData";
import { IoIosArrowDown } from "react-icons/io";
import StudentSearch from "../components/StudentSearch";
import { FeatureContext } from "../context/FeaturesSystem";
import Loader from "../components/Loader";
import NoDataFound from "../components/NoDataFound.jsx";

const AddMarks = () => {
  const {
    addMarksList,
    addMarksError,
    addMarksLoading,
    allAddMarksError,
    allAddMarksList,
    allAddMarksLoading,
    setAllAddMarksList,
    addMarks,
    getAddMarks,
    deleteAddMarks,
  } = useContext(FeatureContext);
  const [selected, setSelected] = useState({
    year: "",
    courseName: "",
    studentsName: "",
    subject: "",
    surName: "",
    rollNo: "",
    examName: "",
    writtenMarks: "",
    oralMarks: "",
  });
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value.toLowerCase(),
    });
  };

  const handleAddMarks = async (e) => {
    e.preventDefault();
    await addMarks(selected);
    setSelected({
      year: "",
      courseName: "",
      studentsName: "",
      subject: "",
      surName: "",
      rollNo: "",
      examName: "",
      writtenMarks: "",
      oralMarks: "",
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
    const handleAllAddedMarks = async () => {
      await getAddMarks();
    };
    handleAllAddedMarks();
  }, []);

  const marksAdded = { ...allAddMarksList };
  const marksAddedData = marksAdded?.data;

  const handleDelete = async (id) => {
    await deleteAddMarks(id);
    const data = marksAddedData.filter((marks) => marks._id !== id);
    setAllAddMarksList((prevData) => ({
      ...prevData,
      data,
    }));
  };

  console.log(selected);

  return (
    <>
      <div className="w-full space-y-5 px-12">
        <div className="flex items-start mt-10 border-b-2  justify-start ">
          <AiOutlineCheck size={30} />
          <span className="sm:text-lg text-xs font-thin">ADD MARKS</span>
        </div>
        <div className="flex items-center justify-around">
          <div className="cursor-pointer relative group w-52 ">
            <div className="flex">
              <MdOutlineIntegrationInstructions size={30} />
              <span className="text-lg">INSTRUCTIONS</span>
              <div className="absolute top-8 left-10 shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] sm:w-[500px] text-sm">
                <div className="text-center mb-5">
                  <h2>Welcome to Add Mark Page!!</h2>
                </div>
                <div>
                  <h2>On this page, you can perform following actions:</h2>
                  <li>Search class wise assigned subjects marks</li>
                  <li>Add class wise marks of their exams</li>
                  <li>
                    You can select "Absent" for an absent student for exams
                  </li>
                  <h1>
                    <span className="font-bold">Note:{"  "}</span>For updates
                    you can click on Update button or if you want to delete it
                    click on delete button
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          className="items-center place-content-center mx-auto grid lg:grid-cols-2 p-2 text-lg shadow-lg mt-10 gap-2p-4 sm:p-10 bg-gray-50 rounded-md w-[300px] md:w-[600px] text-center overflow-y-auto relative "
          onSubmit={handleAddMarks}
        >
          <p
            className={`${
              addMarksError?.message ? "block" : "hidden"
            } text-md text-green-500 hover:underline ml-12 absolute top-0 `}
          >
            {addMarksError?.message}
          </p>
          {addMarksLoading && <Loader />}
          <p
            className={`${
              addMarksList?.message ? "block" : "hidden"
            } text-md text-green-500 hover:underline ml-12 absolute top-0`}
          >
            {addMarksList?.message}
          </p>
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
            <input
              type="text"
              name="studentsName"
              id="studentsName"
              value={selected.studentsName}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="year"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              StudentsName
            </label>
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="text"
              name="rollNo"
              id="rollNo"
              value={selected.rollNo}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="rollNo"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              RollNo
            </label>
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="text"
              name="surName"
              id="surName"
              autoComplete="off"
              value={selected.surName}
              onChange={handleSelectChange}
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="surName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              surName
            </label>
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
              name="examName"
              id="examName"
              value={selected.examName}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Exam Name
            </label>
            <IoIosArrowDown
              className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
              size={30}
            />
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="number"
              name="writtenMarks"
              id="writtenMarks"
              value={selected.writtenMarks}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Written Marks
            </label>
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="number"
              name="oralMarks"
              id="oralMarks"
              value={selected.oralMarks}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Oral Marks
            </label>
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <button
              type="submit"
              className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
            >
              Add marks
            </button>
          </div>
        </form>
        <div className="w-full">
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
                              Roll No.
                            </th>
                            <th className="pb-3 text-center min-w-[50px] ">
                              Student's Name
                            </th>
                            <th className="pb-3 pr-12 text-center min-w-[50px]">
                              Year
                            </th>
                            <th className="pb-3 text-center min-w-[50px]">
                              CourseName
                            </th>
                            <th className="pb-3 pr-12 text-center min-w-[50px]">
                              Written Marks
                            </th>
                            <th className="pb-3 text-center min-w-[50px]">
                              Oral Marks
                            </th>
                            <th className="pb-3 text-center min-w-[50px]">
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {allAddMarksLoading && <Loader />}
                          {marksAddedData ? (
                            marksAddedData.map((marksData) => (
                              <>
                                <tr className="border-b font-thin text-sm last:border-b-0">
                                  <td className="p-3 pl-0">
                                    <div className="flex items-center">
                                      {marksData.rollNo}
                                    </div>
                                  </td>
                                  <td className="p-3 pr-0 text-center">
                                    <span className="">
                                      {marksData.studentsName}
                                    </span>
                                  </td>
                                  <td className="pr-0 text-center">
                                    <span className="font-semibold ">
                                      {marksData.year}
                                    </span>
                                  </td>
                                  <td className="pr-0 text-center">
                                    <span className="font-semibold text-light-inverse">
                                      {marksData.courseName}
                                    </span>
                                  </td>
                                  <td className="pr-0 text-center">
                                    <span className="font-semibold text-light-inverse">
                                      {marksData.writtenMarks}
                                    </span>
                                  </td>
                                  <td className="pr-0 text-center">
                                    <span className="font-semibold text-light-inverse">
                                      {marksData.oralMarks}
                                    </span>
                                  </td>
                                  <td className="pr-0 text-center">
                                    <span className="font-semibold text-light-inverse">
                                      <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                                        <button className="bg-green-400 rounded-md text-md p-2 cursor-pointer">
                                          Delete
                                        </button>
                                        <div className="absolute shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] border bottom-0 right-8">
                                          <ul className="text-center">
                                            <li className="p-2 text-xs">
                                              Are you sure want to Delete
                                            </li>
                                            <li>
                                              <button
                                                className="text-sm w-full p-2 hover:bg-green-200 focus:text-lg"
                                                onClick={() =>
                                                  handleDelete(marksData._id)
                                                }
                                              >
                                                Yes
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>
                                    </span>
                                  </td>
                                </tr>
                              </>
                            ))
                          ) : (
                            <NoDataFound />
                          )}
                        </tbody>
                      </table>
                    </div>
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

export default AddMarks;
