import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { subjects } from "./subjectsData";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../Loader";

const SelectedSearch = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState("");

  const { sendAssignments, sendAssignmentError, sendAssignmentLoading } =
    useContext(FeatureContext);
  const [selected, setSelected] = useState({
    year: "",
    courseName: "",
    studentsName: "",
    description: "",
    subject: "",
    surName: "",
    rollNo: "",
  });
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value.toLowerCase(),
      currentDate: new Date().toLocaleDateString(),
      currentTime: new Date().toLocaleTimeString(),
    });
  };
  const handleOptionsSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("assignmentOrNotes", file);
    Object.entries(selected).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData);
    try {
      await sendAssignments(formData);
    } catch (error) {
      setError(error);
    }

    setSelected({
      year: "",
      courseName: "",
      studentsName: "",
      description: "",
      subject: "",
      surName: "",
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

  return (
    <>
      <div className="w-full ">
        <form
          className="items-center place-content-center mx-auto grid lg:grid-cols-2 p-2 text-lg shadow-lg mt-10 gap-2p-4 sm:p-10 bg-gray-50 rounded-md w-[300px] md:w-[600px] text-center overflow-y-auto relative "
          onSubmit={handleOptionsSubmit}
        >
          {sendAssignmentLoading && <Loader />}
          <p
            className={`${
              sendAssignmentError.message ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded absolute top-0 `}
          >
            {sendAssignmentError.message}
            {error}
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
          <div className="relative my-2 w-72 sm:w-60 ">
            <input
              type="file"
              name="assignmentAndNotes"
              id="assignmentAndNotes"
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              onChange={(e) => setFile(e.target.files[0])}
            />
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
        </form>
      </div>
    </>
  );
};

export default SelectedSearch;
