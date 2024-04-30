import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const CreateQuestions = () => {
  return (
    <>
      <div className="border-b-2 pb-1">
        <div className="font-thin flex justify-between items-center w-full ">
          <div className="flex items-center mx-auto">
            <h1>CREATE A NEW QUESTIONS</h1>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-1/4 mx-auto flex justify-center items-center gap-5 ">
          <Link to="questions">
            <CiCirclePlus
              size={40}
              className="bg-blue-700 w-10 p-2 rounded-full text-center text-white cursor-pointer "
            />
          </Link>
          <span>SINGLE CHOICE QUESTIONS</span>
        </div>
      </div>
    </>
  );
};

export default CreateQuestions;
