import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import NoDataFound from "../NoDataFound";
const ExamLists = () => {
  const location = useLocation();
  const filteredList = location.state?.list;
  console.log(filteredList);
  return (
    <>
      {filteredList &&
        filteredList.map((list) => (
          <div
            key={list._id}
            className="w-full flex items-center justify-center p-2 mt-5"
          >
            <div className="w-4/5 flex items-center justify-between shadow-lg p-2">
              <h1>
                <span>{list.year.toUpperCase()}</span>
                {"  "}|{"  "}
                <span>{list.courseName.toUpperCase()}</span>
              </h1>
              <Link
                to="questions"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
                state={{ filteredList: list }}
              >
                {list.questions.length}/10
              </Link>
            </div>
          </div>
        ))}
      <Outlet />
    </>
  );
};

export default ExamLists;
