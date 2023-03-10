import { Routes, Route } from "react-router-dom";
import { Portal } from "./portal/Portal";
import { Registeration } from "./registeration/Registeration";
import { Payment } from "./payment/Payment";
import { AvailableCourses } from "./courses/AvailableCourses";
import { StudentSidebar } from "./sidebar/StudentSidebar";
import { StudentInfo } from "./info/StudentInfo";

export const StudentRoutes = () => {
  return (
    <>
      <StudentSidebar />
      <Routes>
        <Route path="" element={<Portal />} />
        <Route path="available_courses" element={<AvailableCourses />} />
        <Route path="studentinfo" element={<StudentInfo />} />
        <Route path="registeration" element={<Registeration />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<Portal />} />
      </Routes>
    </>
  );
};
