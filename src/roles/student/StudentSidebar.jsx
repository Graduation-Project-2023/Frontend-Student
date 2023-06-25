import { Sidebar } from "../../components/header/Sidebar";
import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { FaBookReader, FaMoneyCheck, FaRobot } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
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
    {
      id: "10",
      path: "quiz",
      name: "common.quiz",
      icon: <MdOutlineQuiz />,
    },
    { id: "6", path: "fees", name: "student.fees", icon: <FaMoneyCheck /> },
    {
      id: "7",
      path: "receipts",
      name: "student.receipts",
      icon: <FaMoneyCheck />,
    },
  ];
  return <Sidebar menu={menu} />;
};
