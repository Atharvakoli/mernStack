import React, { useState } from "react";

import { CiSaveDown1 } from "react-icons/ci";

const Questions = ({
  setSelected,
  setQuestion,
  setQuestionsList,
  question,
  isEmptyFields,
}) => {
  const [questions, setQuestions] = useState({
    setMarks: "",
    questionMode: "",
    yourQuestion: "",
    questionsAnswer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    module: "",
  });
  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setQuestions({
      ...questions,
      [name]: value,
    });
  };

  const handleQuestions = () => {
    if (isEmptyFields) {
      setQuestion(!question);
      setSelected((prevState) => ({
        ...prevState,
        questions: [...(prevState.questions || []), questions],
      }));

      setQuestionsList(questions);

      setQuestions({
        setMarks: "",
        questionMode: "",
        yourQuestion: "",
        questionsAnswer: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        module: "",
      });
    }
  };

  return (
    <>
      <div className="border sm:max-w-1/4 w-full">
        <div className="w-full flex flex-col items-center justify-center mt-5 p-4 gap-10">
          <div className="w-full sm:w-4/5 ">
            <div className="flex w-40 gap-2 items-center">
              <CiSaveDown1 size={30} />
              <h1>SET MARKS</h1>
            </div>
            <div className="relative p-2 my-2 w-full sm:w-60">
              <input
                type="number"
                name="setMarks"
                id="setMarks"
                min={1}
                max={5}
                value={questions.setMarks}
                onChange={handleQuestionChange}
                autoComplete="off"
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="setMarks"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                MARKS
              </label>
            </div>
          </div>
          <div className="w-full sm:w-4/5 ">
            <div className="flex w-full p-2 justify-between items-center">
              <div className="flex w-40 gap-2 items-center ">
                <CiSaveDown1 size={30} />
                <h1>Your Question</h1>
              </div>
            </div>
            <textarea
              name="yourQuestion"
              id="yourQuestion"
              cols="70"
              rows="4"
              className="w-full border"
              value={questions.yourQuestion}
              onChange={handleQuestionChange}
              placeholder="Type Your Question text Here"
            ></textarea>
            <h1 className="font-bold">Options:</h1>
            <div className="flex items-center gap-4 p-2 border mt-2 relative">
              <input
                type="radio"
                name="questionsAnswer"
                value={questions.option1}
                onChange={handleQuestionChange}
                required
              />
              <input
                type="text"
                value={questions.option1}
                onChange={handleQuestionChange}
                name="option1"
                id="option1"
                className="peer relative h-10 border w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="questionsAnswer"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                OPTION1
              </label>
            </div>
            <div className="flex items-center gap-4 p-2 border mt-2 relative">
              <input
                type="radio"
                name="questionsAnswer"
                value={questions.option2}
                onChange={handleQuestionChange}
                required
              />
              <input
                type="text"
                value={questions.option2}
                onChange={handleQuestionChange}
                name="option2"
                id="option2"
                className="peer relative h-10 border w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="questionsAnswer"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                OPTION2
              </label>
            </div>
            <div className="flex items-center gap-4 p-2 border mt-2 relative">
              <input
                type="radio"
                name="questionsAnswer"
                value={questions.option3}
                onChange={handleQuestionChange}
                required
              />
              <input
                type="text"
                value={questions.option3}
                onChange={handleQuestionChange}
                name="option3"
                id="option3"
                className="peer relative h-10 border w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="questionsAnswer"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                OPTION3
              </label>
            </div>
            <div className="flex items-center gap-4 p-2 border mt-2 relative">
              <input
                type="radio"
                name="questionsAnswer"
                value={questions.option4}
                onChange={handleQuestionChange}
                required
              />
              <input
                type="text"
                value={questions.option4}
                onChange={handleQuestionChange}
                name="option4"
                id="option4"
                className="peer relative h-10 border w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="questionsAnswer"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                OPTION4
              </label>
            </div>
          </div>
          <div className="w-full sm:w-4/5 ">
            <div className="flex w-42 gap-2 items-center">
              <CiSaveDown1 size={30} />
              <h1>Select Question Mode</h1>
            </div>
            <div className="flex justify-around items-center gap-4 ">
              <div className="flex items-center gap-4 p-2 mt-2">
                <input
                  type="radio"
                  name="questionMode"
                  value="easy"
                  onChange={handleQuestionChange}
                  required
                />
                <label htmlFor="questionMode">Easy</label>
              </div>
              <div className="flex items-center gap-4 p-2 mt-2">
                <input
                  type="radio"
                  name="questionMode"
                  value="moderate"
                  onChange={handleQuestionChange}
                  required
                />
                <label htmlFor="questionMode">Moderate</label>
              </div>
              <div className="flex items-center gap-4 p-2 mt-2">
                <input
                  type="radio"
                  name="questionMode"
                  value="difficulty"
                  onChange={handleQuestionChange}
                  required
                />
                <label htmlFor="questionMode">Difficult</label>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-4/5 ">
            <div className="flex w-40 gap-2 items-center">
              <CiSaveDown1 size={30} />
              <h1>SELECT MODULE</h1>
            </div>
            <div className="relative flex items-center justify-center my-2 w-full sm:w-60">
              <input
                type="number"
                name="module"
                id="module"
                value={questions.module}
                onChange={handleQuestionChange}
                min={1}
                max={12}
                autoComplete="off"
                required
                className="peer relative h-10 border w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="module"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Modules
              </label>
            </div>
            <div className="relative my-2 w-full sm:w-60">
              <span
                onClick={handleQuestions}
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                Create One
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
