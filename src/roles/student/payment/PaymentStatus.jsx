import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import successGif from "../../../shared/images/success.gif";
import failedGif from "../../../shared/images/failed.gif";

export const PaymentStatus = () => {
  const [countdown, setCountdown] = useState(5);
  const location = useLocation();
  const navigate = useNavigate();
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
    <div className="container-fluid mx-auto col-10 col-md-8 col-lg-6 mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="center-image">
            <img
              src={paramValue === "true" ? successGif : failedGif}
              alt={paramValue === "true" ? "success trx" : "failed trx"}
            />
            <h3>
              {paramValue === "true" ? "Payment success!" : "Payment failed!"}
            </h3>
            <h4 className="mt-5">
              Redirecting to Homepage in <span id="countdown">{countdown}</span>
              seconds
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
