import React from "react";
import ExamForm from "../components/ExamCreate/ExamForm";
import CheckExams from "../components/ExamCreate/CheckExams";
import Search from "../components/ExamCreate/Search";

const CreateExam = () => {
  return (
    <>
      <ExamForm />
      <CheckExams />
    </>
  );
};

export default CreateExam;
