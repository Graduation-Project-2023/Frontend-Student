import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "./routes/PrivateRoutes";
import axios from "axios";
////////// Styles //////////
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./main.scss";
////////// Shared Components //////////
import { Login } from "./pages/Login";
import { Footer } from "./common/Footer";
import { ForgetPwd } from "./pages/ForgetPwd";
import { ResetPwd } from "./pages/ResetPwd";
import { Header } from "./components/header/Header";
////////// Private Routes //////////
import { StudentRoutes } from "./roles/student/StudentRoutes";
////////// Public Routes //////////
import { Home } from "./roles/public/home/Home.jsx";
import { Unauthorized } from "./pages/Unauthorized";
import { Redirecting } from "./pages/Redirecting";
import { Landing } from "./roles/public/landing/Landing";
import { AdmissionInfo } from "./roles/public/admission/AdmissionInfo";
import { Staff } from "./roles/public/staff/Staff";
import { Undergraduate } from "./roles/public/undergraduate/Undergraduate";
import { NotFound } from "./pages/NotFound";
import { TestingPage } from "./common/TestingPage";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="" element={<Home />} exact />
        <Route path="login" element={<Login />} />
        <Route path="forgetpwd" element={<ForgetPwd />} />
        <Route path="resetpwd/:token" element={<ResetPwd />} />
        <Route path="landing" element={<Landing />} />
        <Route path="admission_info" element={<AdmissionInfo />} />
        <Route path="undergraduate" element={<Undergraduate />} />
        <Route path="staff" element={<Staff />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="redirecting" element={<Redirecting />} />
        <Route path="testing" element={<TestingPage />} />

        {/* Student Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"STUDENT"} />}>
          <Route path="student/*" element={<StudentRoutes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
