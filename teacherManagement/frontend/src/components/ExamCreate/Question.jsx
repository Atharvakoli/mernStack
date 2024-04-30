import React, { useContext } from "react";
import { FeatureContext } from "../../context/FeaturesSystem";
import Error from "../Error";
import Loader from "../Loader";
import NoDataFound from "../NoDataFound";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BiShowAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
const Question = () => {
  const { allExamError, allExamLoading } = useContext(FeatureContext);

  const location = useLocation();

  if (allExamError) {
    return <Error error={allExamError.message} />;
  }
  if (allExamLoading) {
    return <Loader />;
  }

  const dataList = location.state?.filteredList;
  console.log(dataList);

  const handleQuestionUpdate = () => {};
  const handleQuestionDelete = () => {};
  const handleShowAnswer = () => {};

  return (
    <div className="w-full p-2 flex items-center justify-center flex-col gap-5 space-y-4  mt-10 ">
      {dataList ? (
        dataList.questions.map((item, index) => (
          <>
            <div
              key={item._id}
              className="w-full space-y-4 border-b-2 p-2 bg-slate-400 text-white"
            >
              <div className="w-full flex justify-between items-center ">
                <h1>
                  #{index + 1}. SINGLE CHOICE MCQS{" "}
                  {item.questionMode.toUpperCase()} QUESTION MODULES {"  "}{" "}
                  <span>{item.module}</span>
                </h1>
                <h1>Marks: {item.setMarks}</h1>
              </div>
              <h1>
                <span>Question:</span> <span>{item.yourQuestion}</span>
              </h1>
              <h1>
                <span>Options:</span>
              </h1>
              <div className="w-full border p-2 flex flex-col items-center justify-center">
                <div className="w-full border-t-2 border-b-2 p-2">
                  {item.option1}
                </div>
                <div className="w-full border-t-2 border-b-2 p-2">
                  {item.option2}
                </div>
                <div className="w-full border-t-2 border-b-2 p-2">
                  {item.option3}
                </div>
                <div className="w-full border-t-2 border-b-2 p-2">
                  {item.option4}
                </div>
              </div>
              <div className="flex gap-4 items-center justify-end w-full mt-2">
                <button
                  onClick={() => handleShowAnswer(item._id)}
                  className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
                >
                  <BiShowAlt size={20} />
                </button>
                <button
                  onClick={() => handleQuestionUDelete(item._id)}
                  className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
                >
                  <MdOutlineDeleteOutline size={20} />
                </button>
                <button
                  onClick={() => handleQuestionUpdate(item._id)}
                  className="bg-green-400 rounded-md text-md sm:p-2 p-1 cursor-pointer flex items-center justify-center gap-2"
                >
                  <CiEdit size={20} />
                  <span>Edit Question</span>
                </button>
              </div>
            </div>
          </>
        ))
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default Question;
