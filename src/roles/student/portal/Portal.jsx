// BASSANT @bassantahmed115

import { useNavigate } from "react-router-dom";
import { SidebarCont } from "../../../components/header/SidebarCont";

export const Portal = () => {
  const navigate = useNavigate();
  return (
    <SidebarCont>
      <div>
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
    </SidebarCont>
  );
};
