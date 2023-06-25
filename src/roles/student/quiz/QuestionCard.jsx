import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const QuestionCard = (props) => {
  const {
    question,
    questionNumber,
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
      <span className="quest-num">{questionNumber + 1}</span>
      <h4 className="d-flex align-items-center" style={{ gap: "15px" }}>
        {question.question}
      </h4>
      <ul>
        {Object.entries(question.choices).map((item, index) => {
          const [choice, choiceLabel] = item;
          return (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  value={choiceLabel}
                  checked={selectedChoices.includes(choiceLabel)}
                  onChange={(event) => handleChoiceSelect(event, choiceLabel)}
                />
                {choice}- {choiceLabel}
              </label>
            </li>
          );
        })}
      </ul>
      <button onClick={handleButtonClick}>
        {lastQuestion ? t("quiz.submit") : t("quiz.next")}
      </button>
    </div>
  );
};
