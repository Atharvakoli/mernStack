import { Exam } from "../models/Exam.model.js";
import { AddMarksOfExam } from "../models/addMarks.model.js";
import { Assignment } from "../models/assignment.model.js";
import { TeacherMessage } from "../models/teachersMessage.model.js";
import { TeacherRemark } from "../models/teacherRemark.model.js";
import { RecordedClass } from "../models/uploadRecordedClass.model.js";

import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/uploadImages.js";
import { Timetable } from "../models/timetable.model.js";

export const uploadAssignmentAndNotes = asyncHandler(async (req, res) => {
  const {
    courseName,
    subject,
    year,
    description,
    studentsName,
    surName,
    rollNo,
  } = req.body;
  if (
    [courseName, subject, year, studentsName, surName].some(
      (sub) => sub?.trim() === ""
    )
  ) {
    throw new ApiError(400, "Fields cannot be empty");
  }
  const existingStudentAssignmentAndNotes = await Assignment.findOne({
    $or: [{ rollNo }],
  });

  if (existingStudentAssignmentAndNotes) {
    throw new ApiError(409, "Students exist with studentsName and surname ");
  }

  const assignmentNotesFile = req.files?.assignmentOrNotes[0]?.path;
  if (!assignmentNotesFile) {
    throw new ApiError(404, "files is required");
  }

  const assignmentAndNotes = await uploadOnCloudinary(assignmentNotesFile);

  const createAssignmentAndNotes = await Assignment.create({
    courseName,
    subject,
    studentsName,
    year,
    surName,
    description,
    rollNo,
    assignmentOrNotes: assignmentAndNotes?.url,
  });
  if (!createAssignmentAndNotes) {
    throw new ApiError(500, "Something went wrong when creating Assignment");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createAssignmentAndNotes,
        "Created Assignment or Notes status success..!"
      )
    );
});

export const allStudentAssignment = asyncHandler(async (req, res) => {
  const studentAssignment = await Assignment.find();
  if (!studentAssignment) {
    throw new ApiError(
      500,
      "Something went wrong when getting the studentAssignment"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        studentAssignment,
        "studentAssignment Fetched success..!"
      )
    );
});

export const uploadRecordedClass = asyncHandler(async (req, res) => {
  const { year, courseName, description, subject, videoUrl, currentDate } =
    req.body;

  if (
    [year, courseName, description, subject, videoUrl].some(
      (sub) => sub?.trim() === ""
    )
  ) {
    throw new ApiError(400, "Fields cannot be empty");
  }

  const existingVideoUrl = await RecordedClass.findOne({
    $or: [{ videoUrl }],
  });
  if (existingVideoUrl) {
    throw new ApiError(409, "Existing Url mentioned");
  }

  const createRecordedClass = await RecordedClass.create({
    year,
    courseName,
    description,
    subject,
    currentDate,
    videoUrl,
  });

  if (!createRecordedClass) {
    throw new ApiError(
      500,
      "Some thing went wrong when creating recorded class"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createRecordedClass,
        "Successfully Created Recorded Class"
      )
    );
});

export const allRecordedClass = asyncHandler(async (req, res) => {
  const recordedClass = await RecordedClass.find();
  if (!recordedClass) {
    throw new ApiError(
      500,
      "Something went wrong when getting the Recorded class "
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        recordedClass,
        "Recorded lectures data Fetched success..!"
      )
    );
});

export const deleteRecordedClass = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    throw new ApiError(400, "ID required");
  }
  const recordedClass = await RecordedClass.findById(id);
  if (!recordedClass) {
    throw new ApiError(500, "RecordedClass not found");
  }
  const recordedClassToDelete = await RecordedClass.deleteOne();

  if (!recordedClassToDelete) {
    throw new ApiError(500, "Recorded Class To delete Something went wrong..!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        recordedClassToDelete,
        `Recorded Class With deleted success..!`
      )
    );
});

export const teachersMessage = asyncHandler(async (req, res) => {
  const { teachersName, message, courseName } = req.body;

  if (
    [teachersName, message, courseName].some((fields) => fields?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const createTeacherMessage = TeacherMessage.create({
    teachersName,
    message,
    courseName,
  });

  if (!createTeacherMessage) {
    throw new ApiError(500, "Something went wrong while creating message");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, createTeacherMessage, "Message created successfully")
    );
});

export const getTeacherMessage = asyncHandler(async (req, res) => {
  const teacherMessage = await TeacherMessage.find();

  if (!teacherMessage) {
    throw new ApiError(404, "Teacher Messages not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, teacherMessage, "Teachers Message Success..!"));
});

export const deleteTeacherMessage = asyncHandler(async (req, res) => {
  const getId = req.params.id;

  if (!getId) {
    throw new ApiError(409, "Id is required field");
  }
  const findTeacherMessage = await TeacherMessage.findById(id);
  if (!findTeacherMessage) {
    throw new ApiError(500, "Teacher message not found");
  }
  const deleteTeacherMessageOne = await TeacherMessage.deleteOne();

  if (!deleteTeacherMessageOne) {
    throw new ApiError(
      500,
      "Teacher message To delete Something went wrong..!"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        deleteTeacherMessageOne,
        "Deleted message Success..!"
      )
    );
});

export const addMarksOfExam = asyncHandler(async (req, res) => {
  const {
    year,
    courseName,
    studentsName,
    subject,
    surName,
    rollNo,
    examName,
    writtenMarks,
    oralMarks,
  } = req.body;

  if (
    [year, courseName, studentsName, subject, surName, rollNo, examName].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const studentExamMark = AddMarksOfExam.create({
    year,
    courseName,
    studentsName,
    subject,
    surName,
    rollNo,
    examName,
    writtenMarks,
    oralMarks,
  });

  if (!studentExamMark) {
    throw new ApiError(500, "Something went wrong while adding student marks");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, studentExamMark, "Exam Marks created successfully")
    );
});

export const getAllStudentsExamMarks = asyncHandler(async (req, res) => {
  const examMarks = await AddMarksOfExam.find();

  if (!examMarks) {
    throw new ApiError(404, "Exam marks not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, examMarks, "Exam Marks Success..!"));
});

export const deleteExamMarks = asyncHandler(async (req, res) => {
  const getExamMarksId = req.params.id;

  if (!getExamMarksId) {
    throw new ApiError(409, "Id is required field");
  }

  const findAddedExamMarks = await AddMarksOfExam.findById(getExamMarksId);

  if (!findAddedExamMarks) {
    throw new ApiError(500, "Added Exam marks Not found");
  }

  const deleteExamMarksOne = await AddMarksOfExam.deleteOne();

  if (!deleteExamMarksOne) {
    throw new ApiError(500, "Exam Marks To delete Something went wrong..!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, deleteExamMarksOne, "Deleted message Success..!")
    );
});

export const createExam = asyncHandler(async (req, res) => {
  const {
    year,
    courseName,
    subject,
    examDurationInMinutes,
    examNameInSemester,
    date,
    examTime,
    typeOfExam,
    questions,
  } = req.body;

  if (
    [year, courseName, subject, typeOfExam].some((field) => field.trim() === "")
  ) {
    throw new ApiError(400, "Fields are required");
  }

  const exam = await Exam.create({
    year,
    courseName,
    subject,
    examDurationInMinutes,
    examNameInSemester,
    date,
    examTime,
    typeOfExam,
    questions,
  });

  if (!exam) {
    throw new ApiError(500, "Something went wrong while creating Exam");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, exam, "Exam created successfully"));
});

export const getExams = asyncHandler(async (req, res) => {
  const exam = await Exam.find();

  if (!exam) {
    throw new ApiError(404, "Exam not found");
  }
  return res.status(201).json(new ApiResponse(200, exam, "Exam Success..!"));
});

export const deleteExam = asyncHandler(async (req, res) => {
  const getExamId = req.params.id;

  if (!getExamId) {
    throw new ApiError(409, "Id is required field");
  }

  const findExam = await Exam.findById(getExamId);

  if (!findExam) {
    throw new ApiError(500, "Exam  Not found");
  }

  const deleteExamOne = await Exam.deleteOne();

  if (!deleteExamOne) {
    throw new ApiError(500, "Exam To delete Something went wrong..!");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, deleteExamOne, "Deleted message Success..!"));
});

export const teacherRemark = asyncHandler(async (req, res) => {
  const { enrollNo, remarkBox, date } = req.body;

  if ([remarkBox].some((field) => field.trim() === "")) {
    throw new ApiError(400, "Fields are required");
  }
  if (enrollNo < 100) {
    throw new ApiError(400, "Enroll number should be above 100");
  }

  const teacherRemark = await TeacherRemark.create({
    enrollNo,
    remarkBox,
    date,
  });

  if (!teacherRemark) {
    throw new ApiError(
      500,
      "Something went wrong while creating teacher Remark"
    );
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, teacherRemark, "Teacher Remark created successfully")
    );
});

export const getTeacherRemark = asyncHandler(async (req, res) => {
  const remark = await TeacherRemark.find();

  if (!remark) {
    throw new ApiError(404, "Remark not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, remark, "Remark Success..!"));
});

export const deleteTeacherRemark = asyncHandler(async (req, res) => {
  const getTeacherRemarkId = req.params.id;

  if (!getTeacherRemarkId) {
    throw new ApiError(409, "Id is required field");
  }

  const findTeacherRemark = await TeacherRemark.findById(getTeacherRemarkId);

  if (!findTeacherRemark) {
    throw new ApiError(500, "Teacher Remark Not found");
  }

  const deleteTeacherRemarkOne = await TeacherRemark.deleteOne();

  if (!deleteTeacherRemarkOne) {
    throw new ApiError(500, "Teacher Remark To delete Something went wrong..!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, deleteTeacherRemarkOne, "Deleted message Success..!")
    );
});

export const timetable = asyncHandler(async (req, res) => {
  const { year, courseName, addTitle, addDescription } = req.body;

  if (
    [year, courseName, addTitle, addDescription].some(
      (field) => field.trim() === ""
    )
  ) {
    throw new ApiError(400, "Fields are required");
  }
  const timetableFile = req.files?.timetableFiles[0]?.path;
  const files = await uploadOnCloudinary(timetableFile);

  const timetable = await Timetable.create({
    year,
    courseName,
    addTitle,
    addDescription,
    files: files.url,
  });

  if (!timetable) {
    throw new ApiError(500, "Something went wrong while creating timetable");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, timetable, "Timetable created successfully"));
});

export const getTimetable = asyncHandler(async (req, res) => {
  const timetable = await Timetable.find();

  if (!timetable) {
    throw new ApiError(404, "Timetable not found");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, timetable, "Remark Success..!"));
});

export const deleteTimetable = asyncHandler(async (req, res) => {
  const getTimetableId = req.params.id;

  if (!getTimetableId) {
    throw new ApiError(409, "Id is required field");
  }

  const findTimetable = await Timetable.findById(getTimetableId);

  if (!findTimetable) {
    throw new ApiError(500, "Timetable Not found");
  }

  const deleteTimetableOne = await Timetable.deleteOne();

  if (!deleteTimetableOne) {
    throw new ApiError(500, "Timetable To delete Something went wrong..!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(201, deleteTimetableOne, "Deleted message Success..!")
    );
});
