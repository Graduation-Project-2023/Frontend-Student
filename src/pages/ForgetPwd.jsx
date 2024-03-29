import { useRef, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { useTranslation } from "react-i18next";
import frgt from "../shared/images/frgt.png";
import { LoginTemplate } from "../components/other/LoginTemplate";

export const ForgetPwd = () => {
  const { t } = useTranslation();
  const emailRef = useRef();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });

  const handlePwdFrgt = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({ ...prev, loading: true, error: false }));
    axios
      .post(BASE_URL + "/auth/forgot_password", {
        email: emailRef.current.value,
      })
      .then((res) => {
        console.log(res);
        setUserUX((prev) => ({ ...prev, loading: false }));
      })
      .catch((error) => {
        console.log(error);
        setUserUX({
          loading: false,
          error: true,
          errorMsg: "common.error",
        });
      });
  };

  return (
    <LoginTemplate
      handle={handlePwdFrgt}
      input1={t(`forget.email`)}
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
      logo={frgt}
      forget={false}
      title={t(`forget.subtitle`)}
      button={t(`forget.button`)}
    />
  );
};
