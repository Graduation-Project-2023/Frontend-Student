import { useTranslation } from "react-i18next";
export const LoginTemplate = () => {
  const { t } = useTranslation();
  return <div>{t("common.login")}</div>;
};
