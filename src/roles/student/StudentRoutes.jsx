import { Routes, Route } from "react-router-dom";
import { Portal } from "./portal/Portal";
import { Registeration } from "./registeration/Registeration";
import { Payment } from "./payment/Payment";

export const StudentRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Portal />} />
        <Route path="registeration" element={<Registeration />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<Portal />} />
      </Routes>
    </>
  );
};
