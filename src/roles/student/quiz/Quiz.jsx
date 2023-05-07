import { useState, useEffect } from "react";
import { STUDENT_URL } from "../../../shared/API";
import { useAuth } from "../../../hooks/useAuth";
import axios from "axios";

export const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const authContext = useAuth();

  useEffect(() => {
    setUserUX({ loading: true, error: false, errorMsg: "" });
    axios
      .get(`${STUDENT_URL}/quizzes?studentId=${authContext.id}`)
      .then((res) => {
        console.log(res);
        setQuiz(res.data);
        setUserUX({ loading: false, error: false, errorMsg: "" });
      })
      .catch((err) => {
        console.log(err);
        setUserUX({ loading: false, error: true, errorMsg: "error" });
      });
  }, [authContext.id]);

  return <div>Quiz</div>;
};
