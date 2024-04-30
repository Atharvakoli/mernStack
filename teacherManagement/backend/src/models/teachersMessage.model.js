import mongoose, { Schema } from "mongoose";

const teachersMessage = Schema(
  {
    teachersName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export const TeacherMessage = new mongoose.model(
  "TeacherMessage",
  teachersMessage
);
