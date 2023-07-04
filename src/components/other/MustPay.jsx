import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import { SidebarCont } from "../header/SidebarCont";
import { Alert, Button } from "react-bootstrap";

export const MustPay = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <SidebarCont>
      <Alert
        variant="danger"
        className="d-flex justify-content-center align-items-center flex-column"
      >
        <h2>{t("error.payFirst")}</h2>
        <Button
          variant="secondary"
          onClick={() => {
            navigate("/student/fees");
          }}
          style={{
            width: "200px",
            marginTop: "20px",
          }}
        >
          {t("error.payNow")}
        </Button>
      </Alert>
    </SidebarCont>
  );
};
