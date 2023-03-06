// DONIA W RADWAN @DoniaAboelyazed @MOoradwan1

import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1 className="home-header">hellooo</h1>
      <button onClick={() => navigate("/login")}>
        click here to go to login
      </button>
      <br /> <br />
      <br />
      <button onClick={() => navigate("/landing")}>
        click here to go to landing
      </button>
      <br /> <br />
      <br />
      <button onClick={() => navigate("/admission_info")}>
        click here to go to admission info
      </button>
      <br /> <br />
      <br />
      <button onClick={() => navigate("/staff_info")}>
        click here to go to staff info
      </button>
      <br /> <br />
      <br />
      <button onClick={() => navigate("/diploma_info")}>
        click here to go to diploma info
      </button>
    </div>
  );
};
