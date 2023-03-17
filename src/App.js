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
////////// Public Routes //////////
import { Home } from "./roles/public/Home.jsx";
////////// Private Routes //////////
import { StudentRoutes } from "./roles/student/StudentRoutes";
import { TestingPage } from "./common/TestingPage";
import { Landing } from "./roles/public/Landing";
import { AdmissionInfo } from "./roles/public/AdmissionInfo";
import { DiplomaInfo } from "./roles/public/DiplomaInfo";
import { Undergraduate } from "./roles/public/Undergraduate";
import { Staff } from "./roles/public/Staff";
import { Arrow } from "./roles/public/Arrow";

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
        <Route path="home" element={<Home />} />
        <Route path="undergraduate" element={<Undergraduate />} />
        <Route path="staff" element={<Staff />} />
        <Route path="arrow" element={<Arrow />} />
        <Route path="admission_info" element={<AdmissionInfo />} />
        <Route path="diploma_info" element={<DiplomaInfo />} />
        <Route path="testing" element={<TestingPage />} />

        {/* Student Routes (Private) */}
        <Route element={<LoginRoute allowedRoles={"STUDENT"} />}>
          <Route path="student/*" element={<StudentRoutes />} />
        </Route>

        <Route path="*" element={<TestingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
