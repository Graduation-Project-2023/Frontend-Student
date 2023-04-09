import { Sidebar } from "../../../components/header/Sidebar";
import { AiOutlineHome } from "react-icons/ai";
import { FaBookReader, FaMoneyCheck, FaRobot } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { CgCardHearts } from "react-icons/cg";
import { BsFileEarmarkText } from "react-icons/bs";
import { ImTable } from "react-icons/im";

export const StudentSidebar = () => {
  const menu = [
    { id: "1", path: "info", name: "student.info", icon: <AiOutlineHome /> },
    {
      id: "2",
      path: "available_courses",
      name: "student.courses",
      icon: <FaBookReader />,
    },
    {
      id: "3",
      path: "registeration",
      name: "student.Registration",
      icon: <AiOutlineUserAdd />,
    },
    { id: "4", path: "schedule", name: "student.schedule", icon: <ImTable /> },
    {
      id: "5",
      path: "progress",
      name: "student.progress",
      icon: <GiSandsOfTime />,
    },
    {
      id: "9",
      path: "assistant",
      name: "common.smartAssistant",
      icon: <FaRobot />,
    },
    // { id: "6", path: "fees", name: "student.fees", icon: <FaMoneyCheck /> },

    // {
    //   id: "7",
    //   path: "grades",
    //   name: "student.grades",
    //   icon: <BsFileEarmarkText />,
    // },
    // {
    //   id: "8",
    //   path: "desires",
    //   name: "student.desire",
    //   icon: <CgCardHearts />,
    // },
  ];
  return <Sidebar menu={menu} />;
};
