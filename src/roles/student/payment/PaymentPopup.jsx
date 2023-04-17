import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import receipt from "../../../shared/images/receipt.png";
import hand from "../../../shared/images/hand.png";
import mc from "../../../shared/images/mc.png";

export const PaymentPopup = () => {
  const { t } = useTranslation();
  const { payment } = useParams();
  const receiptNum = 570.4;

  return (
    <div className="payCont">
      <div className="payCont-wrap">
        <div className="payCont-wrap-head">
          <div className="payCont-wrap-head-div">
            <img src={receipt} alt="" />
          </div>
          <div className="payCont-wrap-head-div">
            <h6>{t(`payment.header`)}</h6>
            <div>
              <h4>{receiptNum}</h4>
            </div>
          </div>
        </div>
        <hr />
        <div className="payCont-wrap-content">
          <div className="payCont-wrap-content-img">
            <img src={hand} alt="" />
          </div>
          <form className="payCont-wrap-content-form">
            <div className="payCont-wrap-content-form-div">
              <h5>{t(`payment.ccn`)}</h5>
              <h6>{t(`payment.ccnTxt`)}</h6>
              <input
                className="payCont-wrap-content-form-div-input"
                type="tel"
                minLength={16}
                style={{ backgroundImage: `url(${mc})` }}
                required
              />
            </div>
            <div className="payCont-wrap-content-form-div">
              <h5>{t(`payment.cvv`)}</h5>
              <h6>{t(`payment.cvvTxt`)}</h6>
              <input
                className="payCont-wrap-content-form-div-input"
                type="number"
                maxLength={3}
                required
              />
            </div>
            <div className="payCont-wrap-content-form-div">
              <h5>{t(`payment.date`)}</h5>
              <input
                className="payCont-wrap-content-form-div-input"
                type="date"
                required
              />
            </div>
            <div className="payCont-wrap-content-form-div">
              <h5>{t(`payment.password`)}</h5>
              <input
                className="payCont-wrap-content-form-div-input"
                type="password"
                minLength={8}
                required
              />
            </div>
          </form>
          <div className="payCont-wrap-content-div">
            <button className="payCont-wrap-content-div-btn">
              {t(`payment.button`)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
