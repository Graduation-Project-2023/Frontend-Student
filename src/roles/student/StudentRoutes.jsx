import { Routes, Route } from "react-router-dom";
import { StudentPortal } from "./portal/StudentPortal";
import { StudentPayment } from "./payment/StudentPayment";
import { NotFound } from "../pages/NotFound";

export const StudentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<StudentPortal />} />
        <Route path="payment" element={<StudentPayment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
