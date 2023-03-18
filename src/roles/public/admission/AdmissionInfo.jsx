// Reusable Components and Images
import img1 from "../../../shared/images/images.jpeg";
import { useTranslation } from "react-i18next";
import { LandingNavbar } from "../../../components/header/LandingNavbar";

export const AdmissionInfo = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LandingNavbar />
      <div className="admission-first-container">
        <p>
          {t("admission.firstcontainer1")}
          <br />
          {t("admission.firstcontainer2")}
        </p>
        <img className="admission-first-container-image" src={img1} alt="/" />
      </div>

      <div className="admission-container">
        <div>
          <h4 className="admission-container-title">
            {t("admission.admissionTitle")}
          </h4>
          <p className="admission-container-text">
            <h5 className="admission-container-text">
              {t("admission.admission1")}
            </h5>
            <h5 className="admission-container-text">
              {t("admission.admission2")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission3")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission4")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission5")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission6")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission7")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission8")}
            </h5>

            <h5 className="admission-container-text">
              {t("admission.admission9")}
            </h5>

            <div>{t("admission.admissionFinalText")}</div>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};