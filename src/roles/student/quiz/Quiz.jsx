import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { STUDENT_URL } from "../../../shared/API";
import axios from "axios";

// Components
import { SidebarCont } from "../../../components/header/SidebarCont";
import { QuestionCard } from "./QuestionCard";
import { ListGroup, Pagination } from "react-bootstrap";

export const Quiz = () => {
  const [quiz, setQuiz] = useState({ questions: [], givenTime: 0 });
  const [questionNumber, setQuestionNumber] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userUX, setUserUX] = useState({
    quiz: { loading: true, error: false, errorMsg: "" },
    submit: { loading: false, error: false, errorMsg: "" },
  });
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(
        `${STUDENT_URL}/sheet/a8653ff5-26d0-4174-8d26-44bfbf123200?studentId=698b2eed-b652-4246-bdbc-610da8b67cb5`
      )
      .then((res) => {
        setQuiz(res.data);
        setRemainingTime(res.data.givenTime * 3600);
        setUserUX((prev) => ({ ...prev, quiz: { loading: false } }));
      })
      .catch((err) => {
        console.log(err);
        setUserUX((prev) => ({
          ...prev,
          quiz: { loading: false, error: true, errorMsg: err.message },
        }));
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          handleSubmit();
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const handlePaginationClick = (pageNumber) => {
    setQuestionNumber(pageNumber - 1);
  };

  const handleFirstPageClick = () => {
    setQuestionNumber(0);
  };

  const handleLastPageClick = () => {
    setQuestionNumber(quiz.questions.length - 1);
  };

  const handlePrevPageClick = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  const handleNextPageClick = () => {
    if (questionNumber < quiz.questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const formatGivenTime = (timeInHours) => {
    const hours = Math.floor(timeInHours);
    const minutes = Math.floor((timeInHours % 1) * 60);

    let formattedTime = "";

    if (hours > 0) {
      formattedTime +=
        hours === 1
          ? `${hours} ${t("quiz.hour")}`
          : `${hours} ${t("quiz.hours")}`;
    }

    if (minutes > 0) {
      formattedTime +=
        hours > 0
          ? ` and ${minutes} ${t("quiz.minute")}`
          : `${minutes} ${t("quiz.minutes")}`;
    }

    return formattedTime;
  };

  const submitQuiz = (answers) => {
    const quizAnswer = {
      started: true,
      answers: answers,
    };
    setUserUX((prev) => ({ ...prev, submit: { loading: true } }));
    axios
      .post(
        `${STUDENT_URL}/sheet/a8653ff5-26d0-4174-8d26-44bfbf123200?studentId=698b2eed-b652-4246-bdbc-610da8b67cb5`,
        quizAnswer
      )
      .then((res) => {
        setUserUX((prev) => ({ ...prev, submit: { loading: false } }));
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setUserUX((prev) => ({
          ...prev,
          submit: { loading: false, error: true, errorMsg: err.message },
        }));
      });
  };

  const nextQuestion = (updatedAnswers) => {
    setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    submitQuiz(answers);
  };

  return (
    <SidebarCont>
      {userUX.quiz.loading ? (
        <p>Loading...</p>
      ) : userUX.quiz.error ? (
        <p>{userUX.quiz.errorMsg}</p>
      ) : (
        <>
          <ListGroup
            horizontal
            style={{
              margin: "0 5%",
              textAlign: "center",
            }}
          >
            <ListGroup.Item
              variant="danger"
              style={{
                borderRadius: "0",
                width: "50%",
              }}
            >
              {t("quiz.remainingTime")}: {formatTime(remainingTime)}
            </ListGroup.Item>
            <ListGroup.Item
              variant="secondary"
              style={{
                width: "25%",
              }}
            >
              {t("quiz.givenTime")}: {formatGivenTime(quiz.givenTime)}
            </ListGroup.Item>
            <ListGroup.Item
              variant="info"
              style={{
                borderRadius: "0",
                width: "25%",
              }}
            >
              {t("quiz.totalMarks")}: {quiz.totalMarks}
            </ListGroup.Item>
          </ListGroup>

          <QuestionCard
            key={quiz.questions[questionNumber].id}
            question={quiz.questions[questionNumber]}
            lastQuestion={questionNumber === quiz.questions.length - 1}
            submitQuiz={submitQuiz}
            nextQuestion={nextQuestion}
            quizAnswers={answers}
          />

          <div className="d-flex justify-content-center align-items-center">
            <Pagination>
              <Pagination.First onClick={handleFirstPageClick} />
              <Pagination.Prev onClick={handlePrevPageClick} />

              {quiz.questions.map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={questionNumber === index}
                  onClick={() => handlePaginationClick(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next onClick={handleNextPageClick} />
              <Pagination.Last onClick={handleLastPageClick} />
            </Pagination>
          </div>
        </>
      )}
    </SidebarCont>
  );
};
