import React from "react";

const Guide = () => {
  return (
    <div className="w-full p-2 grid lg:grid-cols-2  ">
      <div className="w-full p-2">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          MARK ATTENDENE
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>
            Search Student With their Enroll no. and also with year and course
            Name
          </li>
          <li>
            Click On <b>Students-Credentials</b> for Creating, Updating,
            deleting students information
          </li>
          <li>
            When You create it just refresh it will display in the down menu in
            list of students
          </li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          ATTENDENCE REPORT
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>
            Search For Present and absent list so that you can view your
            students details of present and absent
          </li>
          <li>It as been displayed in down menu list</li>
          <li>You can also delete the present and absent student records</li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          STUDENT REPORT
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>
            Search Student With their Enroll no. and also with year and course
            Name
          </li>
          <li>View your Students profiles </li>
          <li>Check Students report while searching </li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          DX ROOM
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>
            This section is for students assignment teacher will share this link
            ans students will upload their assignments{" "}
          </li>
          <li>Teachers will upload their messages for students</li>
          <li>Teachers will upload their recorded class videos</li>
          <li>Teachers will upload their students notes for academy year</li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          ADD MARKS
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>
            Teacher will upload marks of practical exams to show students{" "}
          </li>
          <li>It will display in menu list of UI</li>
          <li>Teacher will delete the records of marks if they want</li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          CREATE EXAM
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>
            Teacher will create Exam for students for their academic practise
          </li>
          <li>It will displayed on your menu list </li>
          <li>It has delete and update mechnism for teachers who logged in</li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          REMARKS
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>Teacher will add or delete students remarks</li>
          <li>It will display on menu list when you create</li>
        </div>
      </div>
      <div className="w-full p-2 ">
        <h1 className="border p-2 text-center text-xl font-bold mb-2 bg-slate-500 text-white">
          TIMETABLE
        </h1>
        <div className="bg-slate-700 text-white p-2">
          <li>Teacher will create a timtabe of their academy year</li>
          <li>
            It gets displayed in menu list from their you can make operations
          </li>
        </div>
      </div>
    </div>
  );
};

export default Guide;
