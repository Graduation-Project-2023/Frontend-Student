import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import success from "../../../shared/images/success.gif";
import failedGif from "../../../shared/images/failed.gif";
import bck from "../../../shared/images/bck.png";

export const PaymentStatus = () => {
  const [countdown, setCountdown] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("success");
  // const paramValue = "false";


  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      navigate("/student/fees", { replace: true });
    }
    // eslint-disable-next-line
  }, [countdown]);

  return (
    <div className="paystatCont" style={{ backgroundImage: `url(${bck})` }}>
      <div className="paystatCont-card">
        <div className="paystatCont-card-content">
          <h3>{paramValue === "true" ? t("payment.success") : t("payment.failed")}</h3>
          <img
              src={paramValue === "true" ? success : failedGif}
              style={{ backgroundColor: "transparent", maxWidth: "300px" }}
              alt={paramValue === "true" ? "success trx" : "failed trx"}
            />
        </div>
      </div>
    </div>
  );
};
