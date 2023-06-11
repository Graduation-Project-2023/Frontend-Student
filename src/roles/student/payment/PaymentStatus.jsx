import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import successGif from "../../../shared/images/success.gif";
import failedGif from "../../../shared/images/failed.gif";

export const PaymentStatus = () => {
  const [countdown, setCountdown] = useState(5);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("success");

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
    <div className="container-fluid mx-auto col-10 col-md-8 col-lg-6 mt-5 ">
      <div className="row">
        <div className="col-md-12 ">
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ gap: "10px" }}
          >
            <img
              src={paramValue === "true" ? successGif : failedGif}
              style={{ backgroundColor: "transparent", maxWidth: "300px" }}
              alt={paramValue === "true" ? "success trx" : "failed trx"}
            />
            <h3>
              {paramValue === "true"
                ? t("payment.success")
                : t("payment.failed")}
            </h3>
            <h4 className="mt-5">
              {t("payment.redirecting")} <span id="countdown">{countdown}</span>{" "}
              {t("payment.seconds")}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
