import { Sidebar } from "../../../components/header/Sidebar";
import { AiOutlineHome } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { CgCardHearts } from "react-icons/cg";
import { BsFileEarmarkText } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { ImTable } from "react-icons/im";

export const StudentSidebar = () => {
  const menu = [
    { id: "0", path: "home", name: "student.home", icon: <AiOutlineHome /> },
    { id: "1", path: "info", name: "student.info", icon: <BiErrorCircle /> },
    {
      id: "2",
      path: "available_courses",
      name: "student.courses",
      icon: <FaBookReader />,
    },
    {
      id: "4",
      path: "registeration",
      name: "student.Registration",
      icon: <AiOutlineUserAdd />,
    },
    { id: "7", path: "fees", name: "student.fees", icon: <CiMoneyCheck1 /> },
    { id: "8", path: "schedule", name: "student.schedule", icon: <ImTable /> },
    {
      id: "3",
      path: "grades",
      name: "student.grades",
      icon: <BsFileEarmarkText />,
    },
    {
      id: "5",
      path: "progress",
      name: "student.progress",
      icon: <GiSandsOfTime />,
    },
    {
      id: "6",
      path: "desires",
      name: "student.desire",
      icon: <CgCardHearts />,
    },
  ];
  return <Sidebar menu={menu} />;
};
