import { Sidebar } from "../../../components/header/Sidebar";

export const StudentSidebar = () => {
  const menu = [
    { id: "1", path: "info", name: "student.info" },
    { id: "2", path: "available_courses", name: "student.courses" },
    { id: "3", path: "grades", name: "student.grades" },
    { id: "4", path: "registeration", name: "student.Registration" },
    { id: "5", path: "progress", name: "student.progress" },
    { id: "6", path: "desires", name: "student.desire" },
    { id: "7", path: "fees", name: "student.fees" },
  ];
  return <Sidebar menu={menu} />;
};
