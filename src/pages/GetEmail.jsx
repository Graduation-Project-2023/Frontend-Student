import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../shared/API";

// Reusable Components and Images
import logo from "../shared/images/logo.png";
import { LoginTemplate } from "../components/other/LoginTemplate";

export const GetEmail = () => {
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const { t } = useTranslation();
  const nationalIdRef = useRef();
  const navigate = useNavigate();

  const openNewWindow = (data) => {};

  const handleGetEmail = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({ ...prev, loading: true, error: false }));
    axios
      .post(BASE_URL + "/acquire_credentials", {
        nationalId: nationalIdRef.current.value,
      })
      .then((res) => {
        console.log(res);
        openNewWindow(res.data);
        setUserUX((prev) => ({ ...prev, loading: false }));
      })
      .catch((error) => {
        console.log(error);
        setUserUX({
          loading: false,
          error: true,
          errorMsg: error.response.data.message,
        });
      });
  };

  return (
    <LoginTemplate
      handle={handleGetEmail}
      input1={t(`gtEmail.NatID`)}
      userUX={userUX}
      inputone={
        <input ref={nationalIdRef} type="number" minLength={6} required />
      }
      logo={logo}
      forget={false}
      title={t(`gtEmail.subtitle`)}
      button={t(`gtEmail.button`)}
    />
  );
};
