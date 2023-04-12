import { Routes, Route } from "react-router-dom";
import { LandingNavbar } from "./LandingNavbar";
import { Home } from "./home/Home";
import { Undergraduate } from "./undergraduate/Undergraduate";
import { Postgraduate } from "./postgraduate/Postgraduate";
import { International } from "./international/International";
import { Staff } from "./staff/Staff";
import { NotFound } from "../../pages/NotFound";

export const LandingRoutes = () => {
  return (
    <>
      <LandingNavbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="undergraduate" element={<Undergraduate />} />
        <Route path="postgraduate" element={<Postgraduate />} />
        <Route path="international" element={<International />} />
        <Route path="staff" element={<Staff />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
