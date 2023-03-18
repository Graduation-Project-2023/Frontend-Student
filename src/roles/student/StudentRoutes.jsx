import { Routes, Route } from "react-router-dom";
import { Portal } from "./portal/Portal";
import { Registeration } from "./registeration/Registeration";
import { Payment } from "./payment/Payment";
import { AvailableCourses } from "./courses/AvailableCourses";
import { StudentSidebar } from "./sidebar/StudentSidebar";
import { Progress } from "./progress/Progress";
import { Schedule } from "./schedule/Schedule";
import { Undergraduate } from "../../roles/public/Undergraduate";
import { Staff } from "../../roles/public/Staff";
import { Home } from "../../pages/Home";

export const StudentRoutes = () => {
  return (
    <>
      <StudentSidebar />
      <Routes>
        <Route path="" element={<Portal />} />
        <Route path="info" element={<Portal />} />
        <Route path="available_courses" element={<AvailableCourses />} />
        <Route path="registeration" element={<Registeration />} />
        <Route path="progress" element={<Progress />} />
        <Route path="home" element={<Home />} />
        <Route path="payment" element={<Payment />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="undergraduate" element={<Undergraduate />} />
        <Route path="staff" element={<Staff />} />
        <Route path="*" element={<Portal />} />
      </Routes>
    </>
  );
};
