import mongoose, { Schema } from "mongoose";

const recordedClassSchema = Schema(
  {
    year: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    currentDate: {
      type: Date,
      required: true,
    },
  },
  { timestamp: true }
);

export const RecordedClass = new mongoose.model(
  "RecordedClass",
  recordedClassSchema
);
