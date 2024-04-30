import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Guide from "../pages/Guide";
import AttendenceMark from "../pages/AttendenceMark";
import LiveClassReport from "../pages/LiveClassReport";
import StudentReports from "../pages/StudentReports";
import AddMarks from "../pages/AddMarks";
import CreateExam from "../pages/CreateExam";
import Remark from "../pages/Remark";
import TimeTable from "../pages/TimeTable";
import Lists from "../components/AttendenceReport/Lists";
import Register from "../pages/Register";
import Login from "../pages/Login";
import RequireAuth from "../auth/RequireAuth";
import Features from "../components/Features";
import Logout from "../pages/Logout";
import StudentInfo from "../components/AttendenceMark/StudentInfo";
import SearchList from "../components/AttendenceMark/SearchList";
import StudentReport from "../components/AttendenceReport/StudentReport";
import StudentsSearchList from "../components/StudentsReports/StudentsSearchList";
import SendingAssignment from "../components/DXRoom/SendingAssignment";
import DXRoom from "../pages/DXRoom";
import TeachersMessage from "../components/DXRoom/TeachersMessage";
import RecordedClass from "../components/DXRoom/RecordedClass";
import Notes from "../components/DXRoom/Notes";
import StudentEntryAndUpdate from "../pages/StudentEntryAndUpdate";
import CrudSearchList from "../components/AttendenceMark/CrudSearchList";
import Question from "../components/ExamCreate/Question.jsx";
import Search from "../components/ExamCreate/Search.jsx";
import ExamLists from "../components/ExamCreate/Lists.jsx";
import ExamSearchLists from "../components/ExamCreate/ExamLists.jsx";

const Routers = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="about" element={<About />} />
      <Route path="guide" element={<Guide />} />
      <Route path="mark-attendence" element={<AttendenceMark />}>
        <Route index element={<StudentInfo />} />
        <Route path="details" element={<SearchList />} />
        <Route path="studentEnrollNo/:enrollNo" element={<SearchList />} />
        <Route path="student-credentials" element={<StudentEntryAndUpdate />}>
          <Route
            path="studentEnrollNo/:enrollNo"
            element={<CrudSearchList />}
          />
        </Route>
      </Route>

      <Route path="live-class-attendence-report" element={<LiveClassReport />}>
        <Route index element={<StudentReport />} />
        <Route path="details/:enrollNo" element={<Lists />} />
        <Route path="details" element={<StudentReport />} />
        <Route path="lists" element={<Lists />} />
      </Route>

      <Route path="student-report" element={<StudentReports />}>
        <Route
          path="studentEnrollNo/:enrollNo"
          element={<StudentsSearchList />}
        />
        <Route path="details" element={<StudentsSearchList />} />
      </Route>

      <Route path="upload-lecture-Assignments" element={<DXRoom />} />
      <Route path="send-assignments" element={<SendingAssignment />} />
      <Route path="teachers-messages" element={<TeachersMessage />} />
      <Route path="recorded-class" element={<RecordedClass />} />

      <Route path="notes" element={<Notes />} />
      <Route path="add-marks" element={<AddMarks />}>
        <Route path="details" element={<StudentReport />} />
      </Route>

      <Route path="create-exam" element={<CreateExam />}>
        <Route index element={<ExamLists />} />
        <Route path="examCheck" element={<Search />}>
          <Route path="examInfo" element={<ExamSearchLists />}>
            <Route path="questions" element={<Question />} />
          </Route>
        </Route>
      </Route>
      <Route path="complaintbox" element={<Remark />} />
      <Route path="timetable" element={<TimeTable />} />
      <Route element={<RequireAuth />}>
        <Route path="/:username/features" element={<Features />} />
      </Route>
    </Route>
  </Routes>
);

export default Routers;
