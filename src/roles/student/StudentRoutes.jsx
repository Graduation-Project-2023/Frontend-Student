import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { STUDENT_URL } from "../../shared/API";
import axios from "axios";

// Components
import { Portal } from "./portal/Portal";
import { Registeration } from "./registeration/Registeration";
import { Payment } from "./payment/Payment";
import { AvailableCourses } from "./courses/AvailableCourses";
import { StudentSidebar } from "./StudentSidebar";
import { Progress } from "./progress/Progress";
import { Schedule } from "./schedule/Schedule";
import { Assistant } from "./assistant/Assistant";
import { Receipts } from "./receipts/Receipts";
import { Quiz } from "./quiz/Quiz";
import { Chat } from "./chat/Chat";
import { Grades } from "./grades/Grades";
import { NotFound } from "../../pages/NotFound";
import { MustPay } from "../../components/other/MustPay";

export const StudentRoutes = () => {
  const authContext = useAuth();
  useEffect(() => {
    axios
      .get(
        STUDENT_URL +
          `/trx/email/${authContext.token}?studentId=${authContext.id}`
      )
      .then((res) => {
        console.log(res);
        if (res.data.length === 0) {
          authContext.rcptsHandler("false");
        } else {
          authContext.rcptsHandler("true");
        }
      })
      .catch((err) => {
        console.log(err);
        authContext.rcptsHandler("true");
      });
    // eslint-disable-next-line
  }, [authContext.token]);

  return (
    <>
      <StudentSidebar />
      <Routes>
        <Route path="" element={<Portal />} />
        <Route path="info" element={<Portal />} />
        <Route path="available_courses" element={<AvailableCourses />} />
        <Route
          path="registeration"
          element={
            authContext.rcpts === "true" ? <Registeration /> : <MustPay />
          }
        />
        <Route path="progress" element={<Progress />} />
        <Route
          path="grades"
          element={authContext.rcpts === "true" ? <Grades /> : <MustPay />}
        />
        <Route path="fees" element={<Payment />} />
        <Route path="receipts" element={<Receipts />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="assistant" element={<Assistant />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
