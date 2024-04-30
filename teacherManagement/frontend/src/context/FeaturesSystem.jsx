import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../customHook/UseLocalStorageHook";

export const FeatureContext = createContext(null);

export default function FeatureState({ children }) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage("studentsData");
  const userData = useLocalStorage("fetchedData");
  const [markAttendLoading, setMarkAttendLoading] = useState(false);
  const [attendListLoading, setAttendListLoading] = useState(false);
  const [studentLoading, setStudentLoading] = useState(false);
  const [studentListingLoading, setStudentListingLoading] = useState(false);
  const [sendAssignmentLoading, setSendAssignmentLoading] = useState(false);
  const [studentsAssignmentLoading, setStudentsAssignmentLoading] =
    useState(false);
  const [recordedClassLoading, setRecordedClassLoading] = useState(false);
  const [allRecordedClassLoading, setAllRecordedClassLoading] = useState(false);
  const [teacherMessageLoading, setTeacherMessageLoading] = useState(false);
  const [allTeacherMessageLoading, setAllTeacherMessageLoading] =
    useState(false);
  const [addMarksLoading, setAddMarksLoading] = useState(false);
  const [allAddMarksLoading, setAllAddMarksLoading] = useState(false);
  const [createExamLoading, setCreateExamLoading] = useState(false);
  const [allExamLoading, setAllExamLoading] = useState(false);
  const [teacherRemarkLoading, setTeacherRemarkLoading] = useState(false);
  const [allTeacherRemarkLoading, setAllTeacherRemarkLoading] = useState(false);
  const [timetableLoading, setTimetableLoading] = useState(false);
  const [allTimetableLoading, setAllTimetableLoading] = useState(false);

  const [markAttendList, setMarkAttendList] = useState([]);
  const [attendList, setAttendList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [studentListing, setStudentListing] = useState([]);
  const [sendAssignmentList, setSendAssignmentList] = useState([]);
  const [studentsAssignmentsList, setStudentsAssignmentsList] = useState("");
  const [recordedClassList, setRecordedClassList] = useState([]);
  const [allRecordedClassList, setAllRecordedClassList] = useState([]);
  const [teacherMessageList, setTeacherMessageList] = useState([]);
  const [allTeacherMessageList, setAllTeacherMessageList] = useState([]);
  const [addMarksList, setAddMarksList] = useState([]);
  const [allAddMarksList, setAllAddMarksList] = useState([]);
  const [examList, setExamList] = useState([]);
  const [allExamList, setAllExamList] = useState([]);
  const [teacherRemarkList, setTeacherRemarkList] = useState([]);
  const [allTeacherRemarkList, setAllTeacherRemarkList] = useState([]);
  const [timetableList, setTimetableList] = useState([]);
  const [allTimetableList, setAllTimetableList] = useState([]);

  const [markAttendError, setMarkAttendError] = useState("");
  const [attendListError, setAttendListError] = useState("");
  const [studentError, setStudentError] = useState("");
  const [studentListingError, setStudentListingError] = useState("");
  const [sendAssignmentError, setSendAssignmentError] = useState("");
  const [studentsAssignmentsError, setStudentsAssignmentsError] = useState("");
  const [recordedClassError, setRecordedClassError] = useState("");
  const [allRecordedClassError, setAllRecordedClassError] = useState("");
  const [teacherMessageError, setTeacherMessageError] = useState("");
  const [allTeacherMessageError, setAllTeacherMessageError] = useState("");
  const [addMarksError, setAddMarksError] = useState("");
  const [allAddMarksError, setAllAddMarksError] = useState("");
  const [createExamError, setCreateExamError] = useState("");
  const [allExamError, setAllExamError] = useState("");
  const [teacherRemarkError, setTeacherRemarkError] = useState("");
  const [allTeacherRemarkError, setAllTeacherRemarkError] = useState("");
  const [timetableError, setTimetableError] = useState("");
  const [allTimetableError, setAllTimetableError] = useState("");

  const studentRef = useRef();
  const markAttendRef = useRef();
  const updateStudentRef = useRef();
  const deleteStudentRef = useRef();
  const sendAssignmentRef = useRef();
  const recordedRef = useRef();
  const deleteRecordedClassRef = useRef();
  const teacherMessageRef = useRef();
  const deleteTeacherMessageRef = useRef();
  const addMarksRef = useRef();
  const deleteAddMarksRef = useRef();
  const examRef = useRef();
  const deleteExamRef = useRef();
  const teacherRemarkRef = useRef();
  const deleteTeacherRemarkRef = useRef();
  const timetableRef = useRef();
  const deleteTimetableRef = useRef();

  const user = userData.getLocalStorage();
  const token = user?.data?.accessToken;

  const createStudent = (data) => {
    studentRef.current = data;
    CreateStudent();
  };
  const deleteStudent = (data) => {
    deleteStudentRef.current = data;
    DeleteStudent();
  };
  const updateStudent = (data) => {
    updateStudentRef.current = data;
    UpdateStudent();
  };
  const createAttendList = (data) => {
    markAttendRef.current = data;
    CreateAttendList();
  };
  const sendAssignments = (data) => {
    sendAssignmentRef.current = data;
    SendAssignment();
  };
  const recordedClass = (data) => {
    recordedRef.current = data;
    RecordedClass();
  };
  const deleteRecordedClass = (data) => {
    deleteRecordedClassRef.current = data;
    DeleteRecordedClass();
  };
  const teachersMessages = (data) => {
    teacherMessageRef.current = data;
    TeacherMessage();
  };
  const deleteTeacherMessage = (data) => {
    deleteTeacherMessageRef.current = data;
    DeleteTeacherMessage();
  };
  const addMarks = (data) => {
    addMarksRef.current = data;
    AddMarks();
  };
  const deleteAddMarks = (data) => {
    deleteAddMarksRef.current = data;
    DeleteAddMarks();
  };
  const createExam = (data) => {
    examRef.current = data;
    CreateExam();
  };
  const deleteExam = (data) => {
    deleteExamRef.current = data;
    DeleteExam();
  };
  const createTeacherRemark = (data) => {
    teacherRemarkRef.current = data;
    CreateTeacherRemark();
  };
  const deleteTeacherRemark = (data) => {
    deleteTeacherRemarkRef.current = data;
    DeleteTeacherRemark();
  };

  const createTimetable = (data) => {
    timetableRef.current = data;
    CreateTimetable();
  };
  const deleteTimetable = (data) => {
    deleteTimetableRef.current = data;
    DeleteTimetable();
  };

  async function CreateStudent() {
    setStudentLoading(true);
    console.log(studentRef.current);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/student/info`,
        studentRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      setStudentList(data);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function UpdateStudent() {
    setStudentLoading(true);
    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/student/updateStudent`,
        updateStudentRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      setStudentList(data);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function DeleteStudent() {
    setStudentLoading(true);
    console.log(deleteStudentRef.current);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/deleteStudent/${deleteStudentRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const deletedStudentId = deleteStudentRef.current;
      const updatedStudentList = studentList.filter(
        (student) => student.id !== deletedStudentId
      );
      setStudentList(updatedStudentList);
      setLocalStorage(studentList);
      setStudentLoading(false);
    } catch (e) {
      setStudentError(e);
      setStudentLoading(false);
    }
  }
  async function Students() {
    setStudentListingLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/allStudents",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setStudentListing(data);
      setStudentListingLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setStudentListingError(e);
      setStudentListingLoading(false);
    }
  }
  async function CreateAttendList() {
    setMarkAttendLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/attendenceRecord",
        markAttendRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setMarkAttendList(data);
      setMarkAttendLoading(false);
    } catch (e) {
      setMarkAttendError(e);
      setMarkAttendLoading(false);
    }
  }
  async function AttendList() {
    setAttendListLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/allattendenceRecord",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );

      const data = res.data;

      setAttendList(data);
      setAttendListLoading(false);
      setLocalStorage(data);
    } catch (error) {
      setAttendListError(error);
      setAttendListLoading(false);
    }
  }
  async function SendAssignment() {
    setSendAssignmentLoading(true);
    console.log(sendAssignmentRef.current);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/student/uploadAssignment`,
        sendAssignmentRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const data = res.data;
      setSendAssignmentList(data);
      setSendAssignmentLoading(false);
    } catch (e) {
      setSendAssignmentError(e);
      setSendAssignmentLoading(false);
    }
  }
  async function assignments() {
    setStudentsAssignmentLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/uploadAssignment",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setStudentsAssignmentsList(data);
      setStudentsAssignmentLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setStudentsAssignmentsError(e);
      setStudentsAssignmentLoading(false);
    }
  }
  async function RecordedClass() {
    setRecordedClassLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/student/recordedClass`,
        recordedRef.current,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;
      setRecordedClassList(data);
      setRecordedClassLoading(false);
    } catch (e) {
      setRecordedClassError(e);
      setRecordedClassLoading(false);
    }
  }
  async function allRecordedClasses() {
    setAllRecordedClassLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/recordedClass",
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const data = res.data;

      setAllRecordedClassList(data);
      setAllRecordedClassLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setAllRecordedClassError(e);
      setAllRecordedClassLoading(false);
    }
  }
  async function DeleteRecordedClass() {
    setAllRecordedClassLoading(true);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/recordedClass/${deleteRecordedClassRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const deletedRecordedClassId = deleteRecordedClassRef.current;
      const updatedRecordedClassList = recordedClassList.filter(
        (student) => student.id !== deletedRecordedClassId
      );
      setRecordedClassList(updatedRecordedClassList);
      setLocalStorage(recordedClassList);
      setAllRecordedClassLoading(false);
    } catch (e) {
      setAllRecordedClassError(e);
      setAllRecordedClassLoading(false);
    }
  }
  async function TeacherMessage() {
    setTeacherMessageLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/teacherMessage",
        teacherMessageRef.current,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setTeacherMessageList(data);
      setTeacherMessageLoading(false);
    } catch (error) {
      setTeacherMessageError(error);
      setTeacherMessageLoading(false);
    }
  }
  async function getTeacherMessages() {
    setAllTeacherMessageLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/teacherMessage",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      setAllTeacherMessageList(data);
      setAllTeacherMessageLoading(false);
      setLocalStorage(data);
    } catch (error) {
      setAllTeacherMessageError(error);
      setAllTeacherMessageLoading(false);
    }
  }
  async function DeleteTeacherMessage() {
    setTeacherMessageLoading(false);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/deleteTeacherMessage/${deleteTeacherMessageRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteToId = deleteTeacherMessageRef.current;
      const updatedTeacherMessageList = teacherMessageList.filter(
        (message) => message._id !== deleteToId
      );
      setTeacherMessageList(updatedTeacherMessageList);
      setLocalStorage(teacherMessageList);
    } catch (error) {
      setTeacherMessageError(error);
      setTeacherMessageLoading(false);
    }
  }

  async function AddMarks() {
    setAddMarksLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/addMarks",
        addMarksRef.current,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setAddMarksList(data);
      setAddMarksLoading(false);
    } catch (error) {
      setAddMarksError(error);
      setAddMarksLoading(false);
    }
  }
  async function getAddMarks() {
    setAllAddMarksLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/addMarks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      setAllAddMarksList(data);
      setAllAddMarksLoading(false);
      setLocalStorage(data);
    } catch (error) {
      setAllAddMarksError(error);
      setAllAddMarksLoading(false);
    }
  }
  async function DeleteAddMarks() {
    setAddMarksLoading(false);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/deleteAddedMarks/${deleteAddMarksRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteToId = deleteAddMarksRef.current;
      const updatedAddMarksList = addMarksList.filter(
        (message) => message._id !== deleteToId
      );
      setTeacherMessageList(updatedAddMarksList);
      setLocalStorage(teacherMessageList);
    } catch (error) {
      setAddMarksError(error);
      setAddMarksLoading(false);
    }
  }

  async function CreateExam() {
    setCreateExamLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/createExam",
        examRef.current,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setExamList(data);
      setCreateExamLoading(false);
    } catch (error) {
      setCreateExamError(error);
      setCreateExamLoading(false);
    }
  }
  async function getExams() {
    setAllExamLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/createExam",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      setAllExamList(data);
      setLocalStorage(data);
      setAllExamLoading(false);
    } catch (error) {
      setAllExamError(error);
      setAllExamLoading(false);
    }
  }
  async function DeleteExam() {
    setCreateExamLoading(false);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/deleteExam/${deleteExamRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteToId = deleteExamRef.current;
      const updatedExamList = examList.filter(
        (exam) => exam._id !== deleteToId
      );
      setExamList(updatedExamList);
      setLocalStorage(examList);
    } catch (error) {
      setCreateExamError(error);
      setCreateExamLoading(false);
    }
  }

  async function CreateTeacherRemark() {
    setTeacherRemarkLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/teacherRemark",
        teacherRemarkRef.current,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setTeacherRemarkList(data);
      setTeacherRemarkLoading(false);
    } catch (error) {
      setTeacherRemarkError(error);
      setTeacherRemarkLoading(false);
    }
  }
  async function getTeacherRemark() {
    setAllTeacherRemarkLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/teacherRemark",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      setAllTeacherRemarkList(data);
      setLocalStorage(data);
      setAllTeacherRemarkLoading(false);
    } catch (error) {
      setAllTeacherRemarkError(error);
      setAllTeacherRemarkLoading(false);
    }
  }
  async function DeleteTeacherRemark() {
    setTeacherRemarkLoading(false);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/deleteTeacherRemark/${deleteTeacherRemarkRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteToId = deleteTeacherRemarkRef.current;
      const updatedTeacherRemarkList = teacherRemarkList.filter(
        (exam) => exam._id !== deleteToId
      );
      setTeacherRemarkList(updatedTeacherRemarkList);
      setLocalStorage(teacherRemarkList);
    } catch (error) {
      setTeacherRemarkError(error);
      setTeacherRemarkLoading(false);
    }
  }

  async function CreateTimetable() {
    setTimetableLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/student/timetable",
        timetableRef.current,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      setTimetableList(data);
      setTimetableLoading(false);
    } catch (error) {
      setTimetableError(error);
      setTimetableLoading(false);
    }
  }
  async function getTimetable() {
    setAllTimetableLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/student/timetable",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      setAllTimetableList(data);
      setLocalStorage(data);
      setAllTimetableLoading(false);
    } catch (error) {
      setAllTimetableError(error);
      setAllTimetableLoading(false);
    }
  }
  async function DeleteTimetable() {
    setTimetableLoading(false);
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/student/deleteTimetable/${deleteTimetableRef.current}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const deleteToId = deleteTimetableRef.current;
      const updatedTimetableList = timetableList.filter(
        (exam) => exam._id !== deleteToId
      );
      setTimetableList(updatedTimetableList);
      setLocalStorage(timetableList);
    } catch (error) {
      setTimetableError(error);
      setTimetableLoading(false);
    }
  }

  useEffect(() => {
    const featureDataFromLocalStorage = () => {
      try {
        const data = getLocalStorage();
        if (data) {
          setStudentListing(data);
          setStudentsAssignmentsList(data);
          setAttendList(data);
          setAllRecordedClassList(data);
          setAllTeacherMessageList(data);
          setAllAddMarksList(data);
          setAllExamList(data);
          setAllTeacherMessageList(data);
          setAllTimetableList(data);
        }
      } catch (error) {
        setStudentListingError(error);
        setStudentsAssignmentsError(error);
        setAttendListError(error);
        setAllRecordedClassError(error);
        setAllTeacherMessageError(error);
        setAllAddMarksError(error);
        setAllExamError(error);
        setAllTeacherRemarkError(error);
        setAllTimetableError(error);
      }
    };
    featureDataFromLocalStorage();
  }, []);

  return (
    <FeatureContext.Provider
      value={{
        // states of a particular request
        studentError,
        studentList,
        studentLoading,
        setStudentListing,
        markAttendList,
        markAttendError,
        markAttendLoading,
        studentListing,
        studentListingError,
        studentListingLoading,
        attendList,
        attendListError,
        attendListLoading,
        sendAssignmentError,
        sendAssignmentList,
        sendAssignmentLoading,
        setStudentsAssignmentsList,
        studentsAssignmentLoading,
        studentsAssignmentsError,
        studentsAssignmentsList,
        recordedClassError,
        recordedClassList,
        setRecordedClassList,
        recordedClassLoading,
        allRecordedClassError,
        allRecordedClassList,
        allRecordedClassLoading,
        setAllRecordedClassList,
        teacherMessageError,
        teacherMessageList,
        setTeacherMessageList,
        teacherMessageLoading,
        allTeacherMessageError,
        allTeacherMessageList,
        allTeacherMessageLoading,
        setAllTeacherMessageList,
        addMarksList,
        addMarksError,
        addMarksLoading,
        allAddMarksError,
        allAddMarksList,
        allAddMarksLoading,
        setAllAddMarksList,
        createExamError,
        createExamLoading,
        examList,
        allExamError,
        allExamList,
        allExamLoading,
        setAllExamList,
        teacherRemarkError,
        teacherRemarkList,
        teacherRemarkLoading,
        allTeacherRemarkError,
        allTeacherRemarkLoading,
        allTeacherRemarkList,
        setAllTeacherRemarkList,
        timetableError,
        timetableList,
        timetableLoading,
        allTimetableError,
        allTimetableList,
        allTimetableLoading,
        setAllTimetableList,
        //All api fetched methods
        createStudent,
        createAttendList,
        Students,
        AttendList,
        updateStudent,
        deleteStudent,
        sendAssignments,
        assignments,
        recordedClass,
        allRecordedClasses,
        deleteRecordedClass,
        teachersMessages,
        deleteTeacherMessage,
        getTeacherMessages,
        addMarks,
        getAddMarks,
        deleteAddMarks,
        createExam,
        deleteExam,
        getExams,
        createTeacherRemark,
        deleteTeacherRemark,
        getTeacherRemark,
        createTimetable,
        getTimetable,
        deleteTimetable,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
}
