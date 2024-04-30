import React from "react";

const Popup = ({
  students,
  onClose,
  studentListingError,
  studentListingLoading,
}) => {
  if (studentListingError) {
    return <Error error={studentListingError.message} />;
  }
  if (studentListingLoading) {
    return <Loader size={40} />;
  }

  return (
    <>
      <div className="fixed pt-20 left-0 top-0 w-full h-full backdrop-blur-sm">
        <div
          className="relative shadow-lg mx-auto p-0 w-5/6"
          style={{ height: "500px", overflow: "scroll" }}
        >
          <div className="py-4 p-4">
            <span
              onClick={onClose}
              className="cursor-pointer font-bold text-xl float-right"
            >
              &times;
            </span>
            {students &&
              students.map(
                ({
                  _id,
                  rollNo,
                  enrollNo,
                  studentsName,
                  medium,
                  year,
                  course,
                  courseName,
                  section,
                  prn,
                  avatar,
                  coverImage,
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
                }) => (
                  <div key={_id} className="p-2 w-full uppercase ">
                    <div className="w-full h-60 mt-10 rounded-t-lg flex items-center justify-center flex-col gap-2 text-center relative">
                      <img
                        src={coverImage}
                        className="w-full h-full rounded-t-lg"
                        alt="coverImage"
                      />
                      <div className="w-full h-72 absolute top-4 flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-t-xl mt-8 mx-auto">
                          <img
                            src={avatar}
                            className="w-full h-full rounded-t-xl mx-auto border"
                            alt="avatar"
                          />
                        </div>
                        <h1 className="text-xl bg-white mt-4 font-bold w-60 uppercase rounded-lg">
                          {studentsName}
                        </h1>
                        <div className="mt-5 p-1 w-72 sm:w-96 flex items-center justify-center">
                          <div className="border-r-2 text-center w-full">
                            <b>ENROLL NO</b>
                            <h1>{enrollNo}</h1>
                          </div>
                          <div className="border-r-2 text-center w-full">
                            <b>YEAR</b>
                            <h1>{year}</h1>
                          </div>
                          <div className=" text-center  w-full">
                            <b>SECTION</b>
                            <h1>{section}</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-12 flex items-center justify-center flex-col gap-2 text-center">
                      <div className="w-full p-2">
                        <div className="w-full bg-blue-900 text-white uppercase rounded-t-xl p-2">
                          personal details
                        </div>
                        <div className="w-full mt-2 grid lg:grid-cols-3 gap-5 place-content-center bg-white md:grid-cols-2">
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>father</h1>
                            <span>=⟫</span>
                            <b> {father}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>Mother</h1>
                            <span>=⟫</span>
                            <b>{mother}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>d.o.b</h1>
                            <span>=⟫</span>
                            <b>{dateOfBirth}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>place of birth</h1>
                            <span>=⟫</span>
                            <b>{placeOfBirth}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>gender</h1>
                            <span>=⟫</span>
                            <b>{gender}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>religion</h1>
                            <span>=⟫</span>
                            <b>{religion}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>caste</h1>
                            <span>=⟫</span>
                            <b>{caste}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>sub caste</h1>
                            <span>=⟫</span>
                            <b>{subCaste}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1> nationality</h1>
                            <span>=⟫</span>
                            <b>{nationality}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>mother tongue</h1>
                            <span>=⟫</span>
                            <b>{motherTongue}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>aadhar no</h1>
                            <span>=⟫</span>
                            <b>{aadharNo}</b>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-2">
                        <div className="w-full bg-blue-900 text-white uppercase rounded-t-xl p-2">
                          contact
                        </div>
                        <div className="w-full mt-2 grid lg:grid-cols-3 gap-5 place-content-center bg-white md:grid-cols-2 ">
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>Phone</h1>
                            <span>=⟫</span>
                            <b>{phone}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>whatsapp no</h1>
                            <span>=⟫</span>
                            <b>{whatsappNo}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>address</h1>
                            <span>=⟫</span>
                            <b>{Address}</b>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-2">
                        <div className="w-full bg-blue-900 text-white uppercase rounded-t-xl p-2">
                          college details
                        </div>
                        <div className="w-full mt-2 grid lg:grid-cols-3 gap-5 place-content-center bg-white md:grid-cols-2 ">
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>medium</h1>
                            <span>=⟫</span>
                            <b>{medium}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>year</h1>
                            <span>=⟫</span>
                            <b>{year}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>course</h1>
                            <span>=⟫</span>
                            <b>{course}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>course Name</h1>
                            <span>=⟫</span>
                            <b>{courseName}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>section</h1>
                            <span>=⟫</span>
                            <b>{section}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>roll no</h1>
                            <span>=⟫</span>
                            <b>{rollNo}</b>
                          </div>
                          <div className="w-72 h-12 border p-2 shadow-lg flex items-center justify-around">
                            <h1>prn</h1>
                            <span>=⟫</span>
                            <b>{prn}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
