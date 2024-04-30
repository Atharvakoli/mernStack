import React, { useContext, useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FeatureContext } from "../../context/FeaturesSystem";
import Error from "../Error";
import Loader from "../Loader";
const TeachersMessage = () => {
  const {
    teachersMessages,
    deleteTeacherMessage,
    getTeacherMessages,
    teacherMessageError,
    teacherMessageList,
    setAllTeacherMessageList,
    teacherMessageLoading,
    allTeacherMessageError,
    allTeacherMessageList,
    allTeacherMessageLoading,
  } = useContext(FeatureContext);
  const [error, setError] = useState("");
  const [messages, setMessage] = useState({
    teachersName: "",
    message: "",
    courseName: "",
  });
  const [date, setDate] = useState({
    fromDate: "",
    toDate: "",
    courseName: "",
  });
  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDate({
      ...date,
      [name]: value,
    });
  };
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setMessage({
      ...messages,
      [name]: value,
    });
  };
  const handleMessagesSubmit = async (e) => {
    e.preventDefault();
    try {
      await teachersMessages(messages);
    } catch (error) {
      setError(error);
    }
  };

  const teacherMessage = allTeacherMessageList?.data;

  console.log(teacherMessage);
  console.log(messages);
  console.log(date);

  function filterData(fromDate, toDate) {
    const filtered = [];
    const fDate = new Date(fromDate);
    const tDate = new Date(toDate);
    teacherMessage.map((item, index) => {
      const currentDate = new Date(item.currentDate);
      if (
        currentDate >= fDate &&
        currentDate <= tDate &&
        item.courseName === courseName
      ) {
        filtered.push(dateArray[index]);
      }
    });
    setMessage(filtered);
  }
  const handleDateSubmit = (e) => {
    e.preventDefault();
    filterData(date.fromDate, date.toDate);
    console.log(message);
    setDate({
      fromDate: "",
      toDate: "",
      courseName: "",
    });
  };

  const handleDelete = async (id) => {
    await deleteTeacherMessage(id);
    const data = teacherMessageList.filter((message) => message._id !== id);
    setAllTeacherMessageList((prevData) => ({
      ...prevData,
      data,
    }));
  };

  useEffect(() => {
    const handleAllTeachersMessage = async () => {
      await getTeacherMessages();
    };
    handleAllTeachersMessage();
  }, []);

  if (teacherMessageError) {
    return <Error error={teacherMessageError?.message} />;
  }

  return (
    <>
      <div className="w-full px-20">
        <div className="w-full ">
          <form
            className="items-center place-content-center mx-auto grid lg:grid-cols-2 p-2 text-lg shadow-lg mt-10 gap-2p-4 sm:p-10 bg-gray-50 rounded-md w-[300px] md:w-[600px] text-center overflow-y-auto relative "
            onSubmit={handleMessagesSubmit}
          >
            {teacherMessageLoading && <Loader />}
            <p
              className={`${
                teacherMessageError?.message ? "block" : "hidden"
              } bg-red-100 border border-red-400 text-red-700 px-1 py-1 rounded relative`}
            >
              {teacherMessageError?.message}
              {error}
            </p>
            <p
              className={`${
                teacherMessageList?.message ? "block" : "hidden"
              } bg-green-100 border border-green-400 text-green-700 px-1 py-1 rounded absolute top-0 `}
            >
              {teacherMessageList?.message}
            </p>
            <div className="relative my-2 w-72 sm:w-60">
              <input
                type="text"
                name="teachersName"
                id="teachersName"
                value={messages.teachersName}
                onChange={handleChange}
                autoComplete="off"
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="teacherName"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Teacher Name
              </label>
            </div>
            <div className="relative my-2 w-72 sm:w-60">
              <input
                type="text"
                name="message"
                id="message"
                autoComplete="off"
                value={messages.message}
                onChange={handleChange}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Message
              </label>
            </div>
            <div className="relative my-2 w-72 sm:w-60">
              <select
                id="courseName"
                name="courseName"
                value={messages.courseName}
                onChange={handleChange}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled>
                  CourseName
                </option>
                <option
                  value="fybca"
                  messages={messages.courseName === "fybca"}
                >
                  fybca
                </option>
                <option
                  value="sybca"
                  messages={messages.courseName === "sybca"}
                >
                  sybca
                </option>
                <option
                  value="tybca"
                  messages={messages.courseName === "tybca"}
                >
                  tybca
                </option>
                <option
                  value="fybms"
                  messages={messages.courseName === "fybms"}
                >
                  fybms
                </option>
                <option
                  value="sybms"
                  messages={messages.courseName === "sybms"}
                >
                  sybms
                </option>
                <option
                  value="tybms"
                  messages={messages.courseName === "tybms"}
                >
                  tybms
                </option>
                <option
                  value="fyb.sc"
                  messages={messages.courseName === "fyb.sc"}
                >
                  fyb.sc
                </option>
                <option
                  value="syb.sc"
                  messages={messages.courseName === "syb.sc"}
                >
                  syb.sc
                </option>
                <option
                  value="tyb.sc"
                  messages={messages.courseName === "tyb.sc"}
                >
                  tyb.sc
                </option>
                <option
                  value="fybmm"
                  messages={messages.courseName === "fybmm"}
                >
                  fybmm
                </option>
                <option
                  value="sybmm"
                  messages={messages.courseName === "sybmm"}
                >
                  sybmm
                </option>
                <option
                  value="tybmm"
                  messages={messages.courseName === "tybmm"}
                >
                  tybmm
                </option>
                <option
                  value="fybfm"
                  messages={messages.courseName === "fybfm"}
                >
                  fybfm
                </option>
                <option
                  value="sybfm"
                  messages={messages.courseName === "sybfm"}
                >
                  sybfm
                </option>
                <option
                  value="tybfm"
                  messages={messages.courseName === "tybfm"}
                >
                  tybfm
                </option>
                <option
                  value="fyb.com"
                  messages={messages.courseName === "fyb.com"}
                >
                  fyb.com
                </option>
                <option
                  value="syb.com"
                  messages={messages.courseName === "syb.com"}
                >
                  syb.com
                </option>
                <option
                  value="tyb.com"
                  messages={messages.courseName === "tyb.com"}
                >
                  tyb.com
                </option>
                <option
                  value="fybbi"
                  messages={messages.courseName === "fybbi"}
                >
                  fybbi
                </option>
                <option
                  value="sybbi"
                  messages={messages.courseName === "SYBBI"}
                >
                  sybbi
                </option>
                <option
                  value="tybbi"
                  messages={messages.courseName === "tybbi"}
                >
                  tybbi
                </option>
                <option
                  value="fybfm"
                  messages={messages.courseName === "fybfm"}
                >
                  fybfm
                </option>
                <option
                  value="sybfm"
                  messages={messages.courseName === "sybfm"}
                >
                  sybfm
                </option>
                <option
                  value="tybfm"
                  messages={messages.courseName === "tybfm"}
                >
                  tybfm
                </option>
              </select>
              <label
                htmlFor="courseName"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                courseName
              </label>
              <IoIosArrowDown
                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
                size={30}
              />
            </div>
            <div className="relative my-2 w-72er-green-500 sm:w-60">
              <button
                type="submit"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto w-full mt-5">
          <form
            onSubmit={handleDateSubmit}
            className="sm:w-full w-5/6 mx-auto grid sm:grid-cols-3 lg:grid-cols-4 place-content-center gap-15 p-2 text-lg"
          >
            <div className="relative my-6 w-72 sm:w-60 flex items-center justify-between">
              <h1>From</h1>
              <input
                type="date"
                name="fromDate"
                value={date.fromDate}
                onChange={handleDateChange}
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-6 w-72 sm:w-60  flex items-center justify-between">
              To
              <input
                type="date"
                name="toDate"
                value={date.toDate}
                onChange={handleDateChange}
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>
            <div className="relative my-2 w-72 sm:w-60 flex items-center justify-center">
              <select
                id="courseName"
                name="courseName"
                value={date.courseName}
                onChange={handleDateChange}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled></option>
                <option value="fybca" messages={date.courseName === "fybca"}>
                  fybca
                </option>
                <option value="sybca" messages={date.courseName === "sybca"}>
                  sybca
                </option>
                <option value="tybca" messages={date.courseName === "tybca"}>
                  tybca
                </option>
                <option value="fybms" messages={date.courseName === "fybms"}>
                  fybms
                </option>
                <option value="sybms" messages={date.courseName === "sybms"}>
                  sybms
                </option>
                <option value="tybms" messages={date.courseName === "tybms"}>
                  tybms
                </option>
                <option value="fyb.sc" messages={date.courseName === "fyb.sc"}>
                  fyb.sc
                </option>
                <option value="syb.sc" messages={date.courseName === "syb.sc"}>
                  syb.sc
                </option>
                <option value="tyb.sc" messages={date.courseName === "tyb.sc"}>
                  tyb.sc
                </option>
                <option value="fybmm" messages={date.courseName === "fybmm"}>
                  fybmm
                </option>
                <option value="sybmm" messages={date.courseName === "sybmm"}>
                  sybmm
                </option>
                <option value="tybmm" messages={date.courseName === "tybmm"}>
                  tybmm
                </option>
                <option value="fybfm" messages={date.courseName === "fybfm"}>
                  fybfm
                </option>
                <option value="sybfm" messages={date.courseName === "sybfm"}>
                  sybfm
                </option>
                <option value="tybfm" messages={date.courseName === "tybfm"}>
                  tybfm
                </option>
                <option
                  value="fyb.com"
                  messages={date.courseName === "fyb.com"}
                >
                  fyb.com
                </option>
                <option
                  value="syb.com"
                  messages={date.courseName === "syb.com"}
                >
                  syb.com
                </option>
                <option
                  value="tyb.com"
                  messages={date.courseName === "tyb.com"}
                >
                  tyb.com
                </option>
                <option value="fybbi" messages={date.courseName === "fybbi"}>
                  fybbi
                </option>
                <option value="sybbi" messages={date.courseName === "SYBBI"}>
                  sybbi
                </option>
                <option value="tybbi" messages={date.courseName === "tybbi"}>
                  tybbi
                </option>
                <option value="fybfm" messages={date.courseName === "fybfm"}>
                  fybfm
                </option>
                <option value="sybfm" messages={date.courseName === "sybfm"}>
                  sybfm
                </option>
                <option value="tybfm" messages={date.courseName === "tybfm"}>
                  tybfm
                </option>
              </select>
              <label
                htmlFor="courseName"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                courseName
              </label>
              <IoIosArrowDown
                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
                size={30}
              />
            </div>
            <div className="relative my-6 w-72 text-center sm:w-60">
              <button
                type="submit"
                className="bg-green-400 rounded-md text-md p-2 cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap -mx-3 mb-5">
          <div className="w-full px-3 mb-6 mx-auto">
            <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
              <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <div className="flex-auto block py-8 pt-6 px-9">
                  <div className="overflow-x-auto">
                    <table className="w-full my-0 align-middle text-dark border-neutral-200 font-thin">
                      <thead className="align-bottom">
                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                          <th className="pb-3 pr-1 text-start min-w-[30px]">
                            Sr No.
                          </th>
                          <th className="pb-3 text-end min-w-[30px]">
                            Teacher Name
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[30px]">
                            CourseName
                          </th>
                          <th className="pb-3 pr-12 text-end min-w-[30px]">
                            Message
                          </th>
                          <th className="pb-3 text-center min-w-[50px]">
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allTeacherMessageLoading && <Loader />}
                        {allTeacherMessageError ? (
                          <Error error={allTeacherMessageError?.message} />
                        ) : null}
                        {teacherMessage ? (
                          teacherMessage.map((message) => (
                            <tr
                              key={message._id}
                              className="border-b font-thin text-sm"
                            >
                              <td className="p-3 pl-0">
                                <div className="flex items-center">
                                  {teacherMessage.length - 1}
                                </div>
                              </td>
                              <td className="p-3 pr-0 text-center">
                                <span className="font-semibold text-light-inverse text-md/normal">
                                  {message.teachersName}
                                </span>
                              </td>
                              <td className="pr-0 text-center">
                                <span className="font-semibold ">
                                  {message.courseName}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-end w-30 ">
                                <span className="text-center">
                                  {message.message.toUpperCase()}
                                </span>
                              </td>
                              <td className="p-3 pr-0 text-center">
                                <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0">
                                  <button
                                    onClick={() => handleDelete(message._id)}
                                    className="group relative sm:h-10 h-10 sm:w-20 w-32 border p-2 overflow-hidden rounded-xl bg-green-500 font-bold text-white sm:text-lg text-xs"
                                  >
                                    Delete
                                    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                                  </button>
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <h1>NO MESSAGE TO SHOW !!</h1>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersMessage;
