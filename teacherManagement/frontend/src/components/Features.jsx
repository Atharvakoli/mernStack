import React, { useState } from "react";
import Feature from "./Feature";

import { FaMarker, FaRegAddressCard, FaResolving } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoIosCreate } from "react-icons/io";
import {
  FaRestroom,
  FaSquarePollHorizontal,
  FaTimeline,
} from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { SiRemark } from "react-icons/si";
import { VscRepo } from "react-icons/vsc";
const features = [
  {
    id: 1,
    name: "MARK ATTENDENCE",
    img: <FaMarker size={45} />,
    navigate: "/mark-attendence",
  },
  {
    id: 2,
    name: "ATTENDENCE REPORT",
    img: <TbReportSearch size={45} />,
    navigate: "/live-class-attendence-report",
  },
  {
    id: 3,
    name: "STUDENT REPORT",
    img: <HiOutlineDocumentReport size={45} />,
    navigate: "/student-report",
  },
  {
    id: 4,
    name: "DX ROOM",
    img: <FaRestroom size={45} />,
    navigate: "/upload-lecture-Assignments",
  },
  {
    id: 5,
    name: "ADD MARKS",
    img: <FaRegAddressCard size={45} />,
    navigate: "/add-marks",
  },
  {
    id: 6,
    name: "CREATE EXAM",
    img: <IoIosCreate size={45} />,
    navigate: "/create-exam",
  },
  {
    id: 7,
    name: "REMARK",
    img: <SiRemark size={45} />,
    navigate: "/complaintbox",
  },
  {
    id: 8,
    name: "TIMETABLE",
    img: <FaTimeline size={45} />,
    navigate: "/timetable",
  },
];

const Features = () => {
  const [item, setItem] = useState(features);
  const handleItemClick = (feature) => {
    setItem(feature);
  };
  return (
    <div className="py-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 p-4 bg-slate-600 sm:w-full w-full">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            feature={feature}
            onClick={() => handleItemClick(feature)}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
