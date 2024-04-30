import mongoose, { Schema } from "mongoose";

const teacherRemark = Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    enrollNo: {
      type: String,
      required: true,
    },
    remarkBox: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export const TeacherRemark = new mongoose.model("TeacherRemark", teacherRemark);
