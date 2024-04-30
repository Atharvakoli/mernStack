import mongoose, { Schema } from "mongoose";

const studentDataSchema = new Schema(
  {
    rollNo: {
      type: String,
      required: true,
    },
    enrollNo: {
      type: String,
      unique: true,
      required: true,
    },
    studentsName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    medium: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    prn: {
      type: String,
      required: true,
    },
    father: {
      type: String,
      required: true,
    },
    mother: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    placeOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
    },
    subCaste: {
      type: String,
    },
    nationality: {
      type: String,
    },
    motherTongue: {
      type: String,
      required: true,
    },
    aadharNo: {
      type: String,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    whatsAppNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const StudentData = mongoose.model("StudentData", studentDataSchema);
