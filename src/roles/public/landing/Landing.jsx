import { useTranslation } from "react-i18next";

// Reusable Components and Images
import { LandingNavbar } from "../../../components/header/LandingNavbar";
import img1 from "../../../shared/images/images.jpeg";

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LandingNavbar />
      <div className="first-container">
        <span>
          <h3 className="first-container-title">{t("landing.welcome")}</h3>

          {t("landing.welcomeTextOne")}
          <br />
          {t("landing.welcomeTextTwo")}
        </span>
        <img className="first-container-image" src={img1} alt="/" />
      </div>

      <div className="second-container">
        <p className="second-container-text">
          {t("landing.secondContainer1")}
          <br />
          {t("landing.secondContainer2")}
        </p>
        <h5 className="second-container-title">
          {t("landing.secondContainerTitle1")} <br />{" "}
          {t("landing.secondContainerTitle2")}
        </h5>
      </div>
      <div className="seperatingColor"></div>

      <div className="third-container">
        <h5 className="third-container-title">
          <div className="trapeziod1"></div>
          <div className="trapeziod2"></div>
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
    </div>
  );
};
