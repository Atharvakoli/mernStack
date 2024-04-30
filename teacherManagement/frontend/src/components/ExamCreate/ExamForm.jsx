import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { subjects } from "../../components/DXRoom/subjectsData";
import { FeatureContext } from "../../context/FeaturesSystem";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Questions from "../../components/ExamCreate/Questions";

const ExamForm = () => {
  const { createExam, getExams, createExamError, createExamLoading, examList } =
    useContext(FeatureContext);
  const [question, setQuestion] = useState(false);

  const [questions, setQuestionsList] = useState([]);

  const isEmptyFields = Object.values(questions).every((value) => value === "");

  const [selected, setSelected] = useState({
    year: "",
    courseName: "",
    subject: "",
    examDurationInMinutes: "",
    examNameInSemester: "",
    date: "",
    examTime: "",
    typeOfExam: "",
  });
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value.toLowerCase(),
    });
  };
  const handleExamForm = async (e) => {
    e.preventDefault();
    if (!isEmptyFields) {
      await createExam(selected);
      setSelected({
        year: "",
        courseName: "",
        subject: "",
        examDurationInMinutes: "",
        examNameInSemester: "",
        date: "",
        examTime: "",
        typeOfExam: "",
      });
    }
  };

  useEffect(() => {
    const handleAllExam = async () => {
      await getExams();
    };
    handleAllExam();
  }, []);

  function filterSubjectByKey(key) {
    const filteredSubject = subjects.filter((subject) => key in subject);
    if (filteredSubject.length > 0) {
      return filteredSubject.map((subject) => subject[key])[0];
    } else {
      return null;
    }
  }
  const subject = filterSubjectByKey(selected.courseName);

  const handleAddQuestion = () => {
    setQuestion(!question);
  };
  return (
    <div className="w-full">
      <div className="w-full p-10 space-y-10 ">
        <div className="border-b-2 pb-1 ">
          <div className="flex mt-5 gap-2">
            <div className="flex items-center gap-2 justify-center font-thin ">
              <FaCheck size={20} />
              <h1>CREATE A NEW EXAM</h1>
            </div>
          </div>
        </div>
        <form
          className="items-center place-content-center mx-auto grid lg:grid-cols-2  p-2 text-lg mt-10 gap-2p-4 sm:p-10 rounded-md w-full sm:w-4/5 text-center overflow-y-auto relative border "
          onSubmit={handleExamForm}
        >
          <p
            className={`${
              createExamError?.message ? "block" : "hidden"
            } text-md text-green-500 hover:underline ml-12 absolute top-0 `}
          >
            {createExamError?.message}
          </p>
          {createExamLoading && <Loader />}
          <p
            className={`${
              examList?.message ? "block" : "hidden"
            } text-md text-green-500 hover:underline ml-12 absolute top-0`}
          >
            {examList?.message}
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
              type="number"
              name="examDurationInMinutes"
              id="examDurationInMinutes"
              value={selected.examDurationInMinutes}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="examDurationInMinutes"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Exam Duration In Minutes
            </label>
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="text"
              name="typeOfExam"
              id="typeOfExam"
              value={selected.typeOfExam}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="typeOfExam"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Type Of Exam
            </label>
          </div>
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="date"
              name="date"
              id="date"
              value={selected.date}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
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
          <div className="relative my-2 w-72 sm:w-60">
            <input
              type="text"
              name="examNameInSemester"
              id="examNameInSemester"
              value={selected.examNameInSemester}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="courseName"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Exam Name In Semester
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
              type="time"
              name="examTime"
              id="examTime"
              value={selected.examTime}
              onChange={handleSelectChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="subject"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              exam Time
            </label>
          </div>
          {question && (
            <div className="relative my-2 w-full col-span-2 ">
              <Questions
                handleSelectChange={handleSelectChange}
                selected={selected}
                setSelected={setSelected}
                setQuestion={setQuestion}
                question={question}
                isEmptyFields={isEmptyFields}
                setQuestionsList={setQuestionsList}
              />
            </div>
          )}
          {!question && (
            <div className="relative my-2 w-72 sm:w-60">
              <span
                onClick={handleAddQuestion}
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                {!question ? "Add Questions" : "Close"}
              </span>
            </div>
          )}
          {!question && (
            <div className="relative my-2 w-72 sm:w-full">
              <button
                type="submit"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                Submit Exam
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
