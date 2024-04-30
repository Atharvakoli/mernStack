import mongoose, { Schema } from "mongoose";

const timetableModel = Schema(
  {
    year: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    addTitle: {
      type: String,
      required: true,
    },
    addDescription: {
      type: String,
      required: true,
    },
    files: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export const Timetable = new mongoose.model("Timetable", timetableModel);
