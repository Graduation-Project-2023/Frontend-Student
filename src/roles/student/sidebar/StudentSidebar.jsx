import { Sidebar } from "../../../components/header/Sidebar";

export const StudentSidebar = () => {
  const menu = [
    { id: "1", path: "studentinfo", name: "student.info" },
    { id: "2", path: "studentcourses", name: "student.courses" },
    { id: "3", path: "studentgrades", name: "student.grades" },
    { id: "4", path: "studentregistration", name: "student.Registration" },
    { id: "5", path: "studentprogress", name: "student.progress" },
    { id: "6", path: "studentdesire", name: "student.desire" },
    { id: "7", path: "studentfees", name: "student.fees" },
  ];
  return <Sidebar menu={menu} />;
};
