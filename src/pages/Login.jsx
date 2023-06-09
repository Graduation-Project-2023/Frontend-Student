import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";
import logo from "../shared/images/logo.png";
import { LoginTemplate } from "../components/other/LoginTemplate";

export const Login = () => {
  const { t } = useTranslation();
  const emailRef = useRef();
  const pwdRef = useRef();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });

  useEffect(() => {
    if (authContext.isLoggedIn) {
      navigate("/student");
    }
    //eslint-disable-next-line
  }, [authContext.isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({ ...prev, loading: true, error: false }));
    const userCredentials = {
      email: emailRef.current.value,
      password: pwdRef.current.value,
    };
    axios
      .post(BASE_URL + "/auth/student_login", userCredentials)
      .then((res) => {
        console.log(res);
        setUserUX((prev) => ({ ...prev, loading: false }));
        authContext.login(res.data.email, res.data.role, res.data.studentId);
        navigate("/student");
      })
      .catch((error) => {
        setUserUX({
          loading: false,
          error: true,
          errorMsg:
            error.response.status === 400
              ? "common.invalidCred"
              : "common.error",
        });
        console.log(error);
      });
  };

  return (
    <LoginTemplate
      handle={handleLogin}
      input1={t(`login.email`)}
      input2={t(`login.password`)}
      userUX={userUX}
      inputone={
        <input
          type="email"
          ref={emailRef}
          minLength={3}
          name="email"
          id="email"
          required
        />
      }
      inputtwo={
        <input
          type="password"
          ref={pwdRef}
          minLength={8}
          name="password"
          id="password"
          required
        />
      }
      logo={logo}
      forget={true}
      title={t(`login.subtitle`)}
      button={t(`login.button`)}
      // userUX={userUX}
    />
  );
};
