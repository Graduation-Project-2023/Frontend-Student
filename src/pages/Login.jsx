import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { useAuth } from "../hooks/useAuth";
import { useTranslation } from "react-i18next";
import { BiError } from "react-icons/bi";
import { FormButton } from "../components/buttons/Buttons";
import cactus from "../shared/images/cactus.png";
import { LoginTemplate } from "../components/other/LoginTemplate";

export const Login = () => {
  const { t } = useTranslation();
  const emailRef = useRef();
  const pwdRef = useRef();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [userUX, setUserUX] = useState({
    submitLoading: false,
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
    setUserUX((prev) => ({ ...prev, submitLoading: true, error: false }));
    const userCredentials = {
      email: emailRef.current.value,
      password: pwdRef.current.value,
    };
    axios
      .post(BASE_URL + "/auth/student_login", userCredentials)
      .then((res) => {
        console.log(res);
        setUserUX((prev) => ({ ...prev, submitLoading: false }));
        authContext.login(res.data.id, res.data.role);
        navigate("/login");
      })
      .catch((error) => {
        setUserUX({
          submitLoading: false,
          error: true,
          errorMsg:
            error.response.status === 400
              ? t("common.invalidCred")
              : t("common.error"),
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
      logo={cactus}
      forget={true}
      title={t(`login.subtitle`)}
      button={t(`login.button`)}
    />
  );
};
