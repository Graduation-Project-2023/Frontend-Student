import { Sidebar } from "../../../components/header/Sidebar";

export const StudentSidebar = () => {
  const menu = [
    { id: "1", path: "info", name: "student.info" },
    { id: "2", path: "available_courses", name: "student.courses" },
    { id: "4", path: "registeration", name: "student.Registration" },
    { id: "7", path: "fees", name: "student.fees" },
    { id: "8", path: "schedule", name: "student.schedule" },
    { id: "3", path: "grades", name: "student.grades" },
    { id: "5", path: "progress", name: "student.progress" },
    { id: "6", path: "desires", name: "student.desire" },
  ];
  return <Sidebar menu={menu} />;
};
