import { IoMdMenu } from "react-icons/io";
import { FeatureContext } from "../../context/FeaturesSystem";
import { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Search = () => {
  const { allExamList } = useContext(FeatureContext);
  const [selected, setSelected] = useState({
    courseName: "",
  });
  let examList = allExamList?.data;
  const navigate = useNavigate();

  const filterBasedOnCourseName = (value) => {
    const data = examList.filter(
      (exam) => exam.courseName === value.courseName
    );
    navigate("examInfo", { state: { list: data } });
  };
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelected({
      ...selected,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterBasedOnCourseName(selected);
    setSelected({
      courseName: "",
    });
  };
  return (
    <>
      <div className="w-full">
        <div className="pb-1 ">
          <div className="flex items-center justify-center mt-5 gap-2">
            <div className="w-30 flex gap-2 items-center justify-center cursor-pointer">
              <form
                onSubmit={handleSubmit}
                className="relative my-2 w-72 flex items-center justify-center sm:w-60"
              >
                <IoMdMenu size={40} />
                <select
                  id="courseName"
                  name="courseName"
                  value={selected.courseName}
                  onChange={handleSelectChange}
                  required
                  className="w-full "
                >
                  <option value="" disabled>
                    CourseName
                  </option>
                  <option
                    value="fybca"
                    selected={selected.courseName === "fybca"}
                  >
                    fybca
                  </option>
                  <option
                    value="sybca"
                    selected={selected.courseName === "sybca"}
                  >
                    sybca
                  </option>
                  <option
                    value="tybca"
                    selected={selected.courseName === "tybca"}
                  >
                    tybca
                  </option>
                  <option
                    value="fybms"
                    selected={selected.courseName === "fybms"}
                  >
                    fybms
                  </option>
                  <option
                    value="sybms"
                    selected={selected.courseName === "sybms"}
                  >
                    sybms
                  </option>
                  <option
                    value="tybms"
                    selected={selected.courseName === "tybms"}
                  >
                    tybms
                  </option>
                  <option
                    value="fyb.sc"
                    selected={selected.courseName === "fyb.sc"}
                  >
                    fyb.sc
                  </option>
                  <option
                    value="syb.sc"
                    selected={selected.courseName === "syb.sc"}
                  >
                    syb.sc
                  </option>
                  <option
                    value="tyb.sc"
                    selected={selected.courseName === "tyb.sc"}
                  >
                    tyb.sc
                  </option>
                  <option
                    value="fybmm"
                    selected={selected.courseName === "fybmm"}
                  >
                    fybmm
                  </option>
                  <option
                    value="sybmm"
                    selected={selected.courseName === "sybmm"}
                  >
                    sybmm
                  </option>
                  <option
                    value="tybmm"
                    selected={selected.courseName === "tybmm"}
                  >
                    tybmm
                  </option>
                  <option
                    value="fybfm"
                    selected={selected.courseName === "fybfm"}
                  >
                    fybfm
                  </option>
                  <option
                    value="sybfm"
                    selected={selected.courseName === "sybfm"}
                  >
                    sybfm
                  </option>
                  <option
                    value="tybfm"
                    selected={selected.courseName === "tybfm"}
                  >
                    tybfm
                  </option>
                  <option
                    value="fyb.com"
                    selected={selected.courseName === "fyb.com"}
                  >
                    fyb.com
                  </option>
                  <option
                    value="syb.com"
                    selected={selected.courseName === "syb.com"}
                  >
                    syb.com
                  </option>
                  <option
                    value="tyb.com"
                    selected={selected.courseName === "tyb.com"}
                  >
                    tyb.com
                  </option>
                  <option
                    value="fybbi"
                    selected={selected.courseName === "fybbi"}
                  >
                    fybbi
                  </option>
                  <option
                    value="sybbi"
                    selected={selected.courseName === "SYBBI"}
                  >
                    sybbi
                  </option>
                  <option
                    value="tybbi"
                    selected={selected.courseName === "tybbi"}
                  >
                    tybbi
                  </option>
                  <option
                    value="fybfm"
                    selected={selected.courseName === "fybfm"}
                  >
                    fybfm
                  </option>
                  <option
                    value="sybfm"
                    selected={selected.courseName === "sybfm"}
                  >
                    sybfm
                  </option>
                  <option
                    value="tybfm"
                    selected={selected.courseName === "tybfm"}
                  >
                    tybfm
                  </option>
                </select>
                <button
                  type="submit"
                  className="bg-green-400 rounded-md text-xs p-2 cursor-pointer"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Search;
