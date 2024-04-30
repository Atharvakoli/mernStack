import mongoose, { Schema } from "mongoose";

const assignmentModel = Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    studentsName: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    surName: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    assignmentOrNotes: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamp: true }
);

export const Assignment = mongoose.model("Assignment", assignmentModel);
