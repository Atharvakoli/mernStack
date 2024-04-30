import mongoose, { Schema } from "mongoose";

const addMarksOfExam = Schema(
  {
    year: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    studentsName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    examName: {
      type: String,
      required: true,
    },
    writtenMarks: {
      type: Number,
      required: true,
    },
    oralMarks: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

export const AddMarksOfExam = mongoose.model("AddMarksOfExam", addMarksOfExam);
