// BASSANT

import { useNavigate } from "react-router-dom";

export const Portal = () => {
  const navigate = useNavigate();
  return (
    <div>
      STUDENT PORTAL
      <button
        onClick={() => {
          navigate("/student/registeration");
        }}
      >
        go to registeration
      </button>
      <br /> <br /> <br />
      <button
        onClick={() => {
          navigate("/student/available_courses");
        }}
      >
        go to available courses
      </button>
    </div>
  );
};
