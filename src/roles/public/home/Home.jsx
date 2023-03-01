import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1 className="home-header">hellooo</h1>
      <button onClick={() => navigate("/login")}>click here to login</button>
    </div>
  );
};
