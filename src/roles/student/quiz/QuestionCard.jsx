import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const QuestionCard = (props) => {
  const {
    question,

    lastQuestion,
    submitQuiz,
    nextQuestion,
    quizAnswers,
  } = props;
  const [selectedChoices, setSelectedChoices] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedChoices(question.selectedChoices || []);
  }, [question]);

  const handleChoiceSelect = (event, choice) => {
    if (event.target.checked) {
      setSelectedChoices((prevChoices) => [...prevChoices, choice]);
    } else {
      setSelectedChoices((prevChoices) =>
        prevChoices.filter((selectedChoice) => selectedChoice !== choice)
      );
    }
  };

  const handleButtonClick = () => {
    const answerObject = {
      questionId: question.id,
      answer: selectedChoices,
    };
    question.selectedChoices = selectedChoices;
    const updatedAnswers = [...quizAnswers];
    const existingAnswerIndex = updatedAnswers.findIndex(
      (answer) => answer.questionId === question.id
    );
    if (existingAnswerIndex !== -1) {
      updatedAnswers[existingAnswerIndex] = answerObject;
    } else {
      updatedAnswers.push(answerObject);
    }

    if (lastQuestion) {
      submitQuiz(updatedAnswers);
    } else {
      nextQuestion(updatedAnswers);
    }
  };

  return (
    <div className="quest-card">
      <h4 className="d-flex align-items-center" style={{ gap: "15px" }}>
        {question.question}
      </h4>
      <ul>
        {Object.entries(question.choices).map((item, index) => {
          const [choice, choiceLabel] = item;
          return (
            <li
              key={index}
              style={{
                direction: "ltr",
              }}
            >
              <div
                className="form-check p-0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "25px",
                }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={choiceLabel}
                  checked={selectedChoices.includes(choiceLabel)}
                  onChange={(event) => handleChoiceSelect(event, choiceLabel)}
                  style={{
                    margin: "0 10px 0 0",
                  }}
                />
                <label
                  className="form-check-label"
                  style={{
                    verticalAlign: "center",
                  }}
                >
                  {choice}- {choiceLabel}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
      <hr
        style={{
          margin: "10px -20px",
        }}
      />

      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={handleButtonClick}
          className={`btn ${
            lastQuestion ? "btn-primary" : "btn-outline-primary"
          }`}
          style={{
            width: "200px",
            height: "40px",
          }}
        >
          {lastQuestion ? t("quiz.submit") : t("quiz.next")}
        </button>
      </div>
    </div>
  );
};
