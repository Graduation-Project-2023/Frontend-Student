import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../shared/images/logo.png";
import { LoginTemplate } from "../components/other/LoginTemplate";

export const GetEmail = () => {
  const { t } = useTranslation();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });

  const handleGetEmail = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({ ...prev, loading: true, error: false }));

  };

  return (
    <LoginTemplate
      handle={handleGetEmail}
      input1={t(`gtEmail.NatID`)}
      userUX={userUX}
      inputone={
        <input
          type="number"
          minLength={6}
          required
        />
      }
      logo={logo}
      forget={false}
      title={t(`gtEmail.subtitle`)}
      button={t(`gtEmail.button`)}
    />
  );
};
