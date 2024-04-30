import { StudentAttendenceData } from "../models/attendRecord.model.js";
import { StudentData } from "../models/studentData.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/uploadImages.js";

export const studentInfo = asyncHandler(async (req, res) => {
  const {
    rollNo,
    enrollNo,
    studentsName,
    medium,
    year,
    course,
    courseName,
    section,
    prn,
    address,
    whatsAppNo,
    phoneNo,
    motherTongue,
    religion,
    gender,
    placeOfBirth,
    dateOfBirth,
    mother,
    father,
    caste,
    subCaste,
    nationality,
    aadharNo,
  } = req.body;
  if (
    [
      rollNo,
      enrollNo,
      studentsName,
      medium,
      year,
      course,
      courseName,
      section,
      address,
      whatsAppNo,
      phoneNo,
      motherTongue,
      religion,
      gender,
      placeOfBirth,
      dateOfBirth,
      mother,
      father,
      caste,
      subCaste,
      nationality,
      aadharNo,
    ].some((property) => property?.trim() === "")
  ) {
    throw new ApiError(400, "All properties are required");
  }
  const existingStudent = await StudentData.findOne({
    $or: [{ enrollNo }, { studentsName }],
  });
  if (existingStudent) {
    throw new ApiError(
      409,
      "Student with enrollNo, studentsName already exists..?"
    );
  }
  console.log(req.files);
  const avatarLocalPath = req.files?.avatar[0]?.path;
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is needed");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is needed");
  }

  const student = await StudentData.create({
    rollNo,
    enrollNo,
    studentsName,
    medium,
    year,
    course,
    courseName,
    section,
    prn,
    avatar: avatar?.url,
    coverImage: coverImage?.url || "",
    address,
    whatsAppNo,
    phoneNo,
    motherTongue,
    religion,
    gender,
    placeOfBirth,
    dateOfBirth,
    mother,
    father,
    caste,
    subCaste,
    nationality,
    aadharNo,
  });
  const createStudent = await StudentData.findById(student._id);

  if (!createStudent) {
    throw new ApiError(
      500,
      "Something went wrong when creating Student or not found"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, createStudent, "Created Student status success..!")
    );
});
export const attendenceRecord = asyncHandler(async (req, res) => {
  const { lecture, date, year, courseName, presentData, absentData } = req.body;

  if (
    [lecture, date, year, courseName].some(
      (property) => property?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All properties are required");
  }

  const createAttendRecord = await StudentAttendenceData.create({
    lecture,
    date,
    year,
    courseName,
    presentData,
    absentData,
  });
  const createRecord = await StudentAttendenceData.findById(
    createAttendRecord._id
  );

  if (!createRecord) {
    throw new ApiError(
      500,
      "Something went wrong when creating AttendRecord or not found"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, createRecord, "Created Student status success..!")
    );
});
export const allStudentInfo = asyncHandler(async (req, res) => {
  const students = await StudentData.find();
  if (!students) {
    throw new ApiError(500, "Something went wrong when getting the Product");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, students, "Students Fetched success..!"));
});
export const deleteStudentInfo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    throw new ApiError(400, "ID required");
  }
  const students = await StudentData.findById(id);
  if (!students) {
    throw new ApiError(500, "student not found");
  }
  const studentToDelete = await StudentData.deleteOne();

  if (!studentToDelete) {
    throw new ApiError(500, "students To delete Something went wrong..!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        studentToDelete,
        `Students With ${id} deleted success..!`
      )
    );
});
export const updateStudentInfo = asyncHandler(async (req, res) => {
  const {
    rollNo,
    enrollNo,
    studentsName,
    medium,
    year,
    course,
    courseName,
    section,
    prn,
    Address,
    whatsappNo,
    phone,
    motherTongue,
    religion,
    gender,
    placeOfBirth,
    dateOfBirth,
    mother,
    father,
    caste,
    subCaste,
    nationality,
    aadharNo,
  } = req.body;
  if (
    [
      rollNo,
      enrollNo,
      studentsName,
      medium,
      year,
      course,
      courseName,
      section,
      prn,
      Address,
      whatsappNo,
      phone,
      motherTongue,
      religion,
      gender,
      placeOfBirth,
      dateOfBirth,
      mother,
      father,
      caste,
      subCaste,
      nationality,
      aadharNo,
    ].some((info) => info?.trim() === "")
  ) {
    throw new ApiError(400, "All properties are required to update");
  }
  const students = await StudentData.findByIdAndUpdate(
    req.body._id,
    {
      $set: {
        rollNo: rollNo,
        enrollNo: enrollNo,
        studentsName: studentsName,
        medium: medium,
        year: year,
        course: course,
        section: section,
        prn: prn,
        Address: Address,
        whatsappNo: whatsappNo,
        phone: phone,
        motherTongue: motherTongue,
        religion: religion,
        gender: gender,
        placeOfBirth: placeOfBirth,
        dateOfBirth: dateOfBirth,
        mother: mother,
        father: father,
        caste: caste,
        subCaste: subCaste,
        nationality: nationality,
        aadharNo: aadharNo,
      },
    },
    { new: true }
  );
  if (!students) {
    throw new ApiError(500, "Something went wrong when getting the students");
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, students, "Account details updated successfully")
    );
});
const updateUserAvatar = asyncHandler(async (req, res) => {
  const avatarPath = req.file?.path;

  if (!avatarPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  const avatar = await uploadOnCloudinary(avatarPath);

  if (!avatar.url) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  const user = await StudentData.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar image updated successfully"));
});
const updateStudentCoverImage = asyncHandler(async (req, res) => {
  const coverImagePath = req.file?.path;

  if (!coverImagePath) {
    throw new ApiError(400, "Cover image file is missing");
  }

  const coverImage = await uploadOnCloudinary(coverImagePath);

  if (!coverImage.url) {
    throw new ApiError(400, "Error while uploading on avatar");
  }

  const user = await StudentData.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    { new: true }
  );

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Cover image updated successfully"));
});
export const allAttendenceRecord = asyncHandler(async (req, res) => {
  const attendence = await StudentAttendenceData.find();
  if (!attendence) {
    throw new ApiError(500, "Something went wrong when getting the Product");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, attendence, "Students Fetched success..!"));
});
