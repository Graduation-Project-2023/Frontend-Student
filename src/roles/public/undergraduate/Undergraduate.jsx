import { useTranslation } from "react-i18next";
import img1 from "../../../shared/images/images.jpeg";
import bck1 from "../staff/bck right.png";
import bck2 from "../staff/bck left.png";
import bck from "../staff/bck.png";
import adm from "../../../shared/images/admission.png";

export const Undergraduate = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div
        className="first-container"
        style={{
          backgroundImage: `url(${i18n.language === "en" ? bck1 : bck2})`,
        }}
      >
        <span>
          <h3 className="first-container-title">{t("landing.welcome")}</h3>
          <h3 className="first-container-txt">
            {t("landing.welcomeTextOne")}
            <br />
            {t("landing.welcomeTextTwo")}
          </h3>
        </span>
        <div className="first-container-image">
          <img src={img1} alt="/" />
        </div>
      </div>

      <div className="second-container">
        <h5 className="second-container-title">
          {t("landing.secondContainerTitle1")}{" "}
          {t("landing.secondContainerTitle2")}
        </h5>
        <div className="second-container-line"></div>
        <p className="second-container-text">
          {t("landing.secondContainer1")}
          <br />
          {t("landing.secondContainer2")}
        </p>
      </div>

      <div
        className="third-container"
        style={{ backgroundImage: `url(${bck})` }}
      >
        <div>
          <h5 className="third-container-title">
            {t("landing.thirdcontainerTitle")}
          </h5>

          <p className="third-container-text">
            {t("landing.thirdcontainerText")} <br />
            {t("landing.thirdcontainerStep1")}
            <br />
            {t("landing.thirdcontainerStep2")} <br />
            {t("landing.thirdcontainerStep3")}
            <br />
            {t("landing.thirdcontainerStep4")}
            <br />
            {t("landing.thirdcontainerStep5")}
            <br />
            {t("landing.thirdcontainerStep6")} <br />
            {t("landing.thirdcontainerStep7")}
          </p>
        </div>
        <div className="third-container-img">
          <img src={adm} alt="/" />
        </div>
      </div>
    </div>
  );
};
