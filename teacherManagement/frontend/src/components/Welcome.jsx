import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="bg-blue-200 w-full p-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full bg-white p-4 ">
            <div className="w-full border mb-2">
              <img
                src="/teacher.avif"
                className="w-full h-sreen"
                alt="image not found"
              />
            </div>
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">MARK ATTENDENCE</h1>
              <button className="bg-green-400 rounded-md text-xs sm:text-lg p-2">
                mark attendence here
              </button>
            </div>
            <img
              src="/attendence.jpg"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">ATTENDENCE REPORT</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Attendence Report here
              </button>
            </div>
            <img
              src="/attendenceReport.jpg"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">STUDENT REPORT</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Student Report here
              </button>
            </div>
            <img
              src="/studentReport.jpg"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">DX ROOM</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Dx Room here
              </button>
            </div>
            <img
              src="/dxRoom.jpg"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">ADD MARKS</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Add here
              </button>
            </div>
            <img
              src="/addMarks.png"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <h1 className="text-xl">CREATE EXAM</h1>
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">ATTENDENCE REPORT</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Attendence here
              </button>
            </div>
            <img
              src="/createExam.jpg"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">REMARK</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Remark here
              </button>
            </div>
            <img
              src="/remark.jpg"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
          <div className="w-full bg-white p-4">
            <div className="flex items-center justify-around w-full rounded-lg bg-blue-200 mb-2 p-2 ">
              <h1 className="sm:text-3xl text-sm">TIMETABLE</h1>
              <button
                type="submit"
                className="bg-green-400 rounded-md text-xs sm:text-lg p-2"
              >
                Timetable here
              </button>
            </div>
            <img
              src="/timetable.png"
              className="w-full h-screen"
              alt="Image not found"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
