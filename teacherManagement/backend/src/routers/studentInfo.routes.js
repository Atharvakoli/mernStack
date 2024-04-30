import { Router } from "express";
import {
  studentInfo,
  allStudentInfo,
  attendenceRecord,
  allAttendenceRecord,
  updateStudentInfo,
  deleteStudentInfo,
} from "../controllers/studentInfo.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import {
  uploadAssignmentAndNotes,
  allStudentAssignment,
  uploadRecordedClass,
  allRecordedClass,
  deleteRecordedClass,
  teachersMessage,
  getTeacherMessage,
  deleteTeacherMessage,
  addMarksOfExam,
  getAllStudentsExamMarks,
  deleteExamMarks,
  createExam,
  getExams,
  deleteExam,
  teacherRemark,
  getTeacherRemark,
  deleteTeacherRemark,
  timetable,
  getTimetable,
  deleteTimetable,
} from "../controllers/assignment.controller.js";

import { verifyJWT } from "../middleware/autho.middleware.js";

const router = Router();

router.route("/info").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  studentInfo
);
router.route("/allStudents").get(verifyJWT, allStudentInfo);
router.route("/attendenceRecord").post(verifyJWT, attendenceRecord);
router.route("/allattendenceRecord").get(verifyJWT, allAttendenceRecord);
router.route("/updateStudent").put(verifyJWT, updateStudentInfo);
router.route("/deleteStudent/:id").delete(verifyJWT, deleteStudentInfo);

//Students Assignment
router
  .route("/uploadAssignment")
  .post(
    verifyJWT,
    upload.fields([
      {
        name: "assignmentOrNotes",
        maxCount: 1,
      },
    ]),
    uploadAssignmentAndNotes
  )
  .get(allStudentAssignment);
router
  .route("/recordedClass")
  .post(verifyJWT, uploadRecordedClass)
  .get(allRecordedClass);
router.route("/recordedClass/:id").delete(verifyJWT, deleteRecordedClass);

router
  .route("/teacherMessage")
  .post(verifyJWT, teachersMessage)
  .get(getTeacherMessage);
router
  .route("/deleteTeacherMessage/:id")
  .delete(verifyJWT, deleteTeacherMessage);

router
  .route("/addMarks")
  .post(verifyJWT, addMarksOfExam)
  .get(verifyJWT, getAllStudentsExamMarks);
router.route("/deleteAddedMarks/:id").delete(verifyJWT, deleteExamMarks);

router
  .route("/createExam")
  .post(verifyJWT, createExam)
  .get(verifyJWT, getExams);
router.route("/deleteExam/:id").delete(verifyJWT, deleteExam);

router
  .route("/teacherRemark")
  .post(verifyJWT, teacherRemark)
  .get(verifyJWT, getTeacherRemark);
router.route("/deleteTeacherRemark/:id").delete(verifyJWT, deleteTeacherRemark);

router
  .route("/timetable")
  .post(
    verifyJWT,
    upload.fields([
      {
        name: "timetableFiles",
        maxCount: 1,
      },
    ]),
    timetable
  )
  .get(verifyJWT, getTimetable);
router.route("/deleteTimetable/:id").delete(verifyJWT, deleteTimetable);

export default router;
