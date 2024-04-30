import mongoose, { Schema } from "mongoose";

const studentsExam = Schema(
  {
    year: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    examDurationInMinutes: {
      type: Number,
      required: true,
    },
    examNameInSemester: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    examTime: {
      type: String,
      required: true,
    },
    typeOfExam: {
      type: String,
      required: true,
    },
    questions: [
      {
        setMarks: {
          type: Number,
          required: true,
        },
        yourQuestion: {
          type: String,
          required: true,
        },
        questionsAnswer: {
          type: String,
          required: true,
        },
        option1: {
          type: String,
          required: true,
        },
        option2: {
          type: String,
          required: true,
        },
        option3: {
          type: String,
          required: true,
        },
        option4: {
          type: String,
          required: true,
        },
        questionMode: {
          type: String,
          required: true,
        },
        module: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamp: true }
);

export const Exam = new mongoose.model("Exam", studentsExam);
