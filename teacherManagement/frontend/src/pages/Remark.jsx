import React, { useContext, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FeatureContext } from "../context/FeaturesSystem";
import Loader from "../components/Loader.jsx";
import { useEffect } from "react";
import NoDataFound from "../components/NoDataFound.jsx";
const Remark = () => {
  const {
    teacherRemarkError,
    teacherRemarkList,
    teacherRemarkLoading,
    allTeacherRemarkError,
    allTeacherRemarkLoading,
    allTeacherRemarkList,
    setAllTeacherRemarkList,
    createTeacherRemark,
    deleteTeacherRemark,
    getTeacherRemark,
  } = useContext(FeatureContext);
  const [remark, setRemark] = useState({
    enrollNo: "",
    remarkBox: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTeacherRemark(remark);
    setRemark({
      enrollNo: "",
      remarkBox: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRemark({
      ...remark,
      [name]: value,
      date: new Date().toLocaleString(),
    });
  };
  useEffect(() => {
    const handleSubmit = async () => {
      await getTeacherRemark();
    };
    handleSubmit();
  }, []);

  if (allTeacherRemarkError) {
    return <Error error={allTeacherRemarkError?.message} />;
  }

  const data = { ...allTeacherRemarkList };
  const teacherRemark = data?.data;

  const handleDelete = async (id) => {
    await deleteTeacherRemark(id);
    const data = teacherRemark.filter((item) => item._id !== id);
    setAllTeacherRemarkList((prevData) => ({
      ...prevData,
      data,
    }));
  };

  return (
    <>
      <div className="w-full border-b-2 space-y-5">
        <div className="flex items-center mt-5 justify-center ">
          <AiOutlineCheck size={30} />
          <span className="sm:text-lg text-xs font-thin">Remarks Box</span>
        </div>
      </div>
      <div className="w-full mt-5 border-b-2">
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center justify-center flex-col gap-8 p-2 text-md relative"
        >
          <p
            className={`${
              teacherRemarkError?.message ? "block" : "hidden"
            } bg-red-100 border border-red-400 text-red-700 p-1 rounded absolute top-48 left-0 `}
          >
            {teacherRemarkError?.message}
          </p>
          {teacherRemarkLoading && <Loader />}
          <p
            className={`${
              teacherRemarkList?.message ? "block" : "hidden"
            } bg-green-100 border w-72 border-red-400 text-green-700 px-4 py-3 rounded absolute top-48 left-0 `}
          >
            {teacherRemarkList?.message}
          </p>
          <div className="relative my-2 w-full sm:w-2/4">
            <input
              type="number"
              name="enrollNo"
              id="enrollNo"
              value={remark.enrollNo}
              onChange={handleChange}
              autoComplete="off"
              required
              className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="enrollNo"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Enroll No
            </label>
          </div>
          <div className="relative my-2 w-full sm:w-2/4">
            <textarea
              name="remarkBox"
              id="remarkBox"
              cols="30"
              rows="10"
              value={remark.remarkBox}
              onChange={handleChange}
              className="peer relative h-20 w-full appearance-none border-b border-slate-200 px-4 text-lg text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            ></textarea>
            <label
              htmlFor="remarkBox"
              className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              Remark Box
            </label>
          </div>
          <div className="relative my-2 w-full text-center sm:w-2/4">
            <button
              type="submit"
              className="bg-green-400 rounded-md w-full text-md p-2 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6 mx-auto">
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
                        <th className="pb-3 pr-1 text-start min-w-[30px]">
                          Enroll No.
                        </th>
                        <th className="pb-3 text-center min-w-[30px]">
                          Remark Message
                        </th>
                        <th className="pb-3 text-center min-w-[130px] ">
                          Date
                        </th>
                        <th className="pb-3 pr-12 text-center min-w-[135px]">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allTeacherRemarkLoading && <Loader />}
                      {teacherRemark ? (
                        teacherRemark.map((list, index) => (
                          <tr className="border-b font-thin text-sm border-dashed last:border-b-0">
                            <td className="p-3 pl-0">
                              <div className="flex items-center">
                                {index + 1}
                              </div>
                            </td>
                            <td className="p-3 pl-0">
                              <div className="flex items-center">
                                {list.enrolNo}
                              </div>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {list.remarkBox}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {list.date}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-center">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                <li className="flex items-center justify-center gap-1 cursor-pointer relative group">
                                  <button className="bg-green-400 rounded-md text-md p-2 cursor-pointer">
                                    Delete
                                  </button>
                                  <div className="absolute shadow-lg rounded-md p-2 z-50 hidden group-hover:block text-black bg-white w-[200px] border bottom-0 right-8 ">
                                    <ul className="text-center">
                                      <li className="p-2 text-xs">
                                        Are you sure want to Delete
                                      </li>
                                      <li>
                                        <button
                                          className="text-sm w-full p-2 hover:bg-green-200 focus:text-lg"
                                          onClick={() => handleDelete(list._id)}
                                        >
                                          Yes
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <NoDataFound />
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remark;
