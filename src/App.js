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
import { Home } from "./roles/public/home/Home.jsx";
////////// Private Routes //////////
import { StudentRoutes } from "./roles/student/StudentRoutes";
import { TestingPage } from "./common/TestingPage";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        {/* Public Routes */}
        <Route path="" element={<Home />} exact />
        <Route path="login" element={<Login />} />
        <Route path="forgetpwd" element={<ForgetPwd />} />
        <Route path="resetpwd/:token" element={<ResetPwd />} />
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
