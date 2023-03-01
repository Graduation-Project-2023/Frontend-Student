import { Routes, Route } from "react-router-dom";
import { StudentPortal } from "./portal/Portal";
import { StudentPayment } from "./payment/Payment";
import { NotFound } from "../../pages/NotFound";

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
