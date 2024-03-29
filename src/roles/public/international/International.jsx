// Reusable Components and Images
import img1 from "../../../shared/images/images.jpeg";
import { useTranslation } from "react-i18next";
import bck from "../staff/bck.png"

export const International = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="admission-first-container" style={{ backgroundImage: `url(${bck})` }}>
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
          <span className="admission-container-text">
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

            <div className="final-text">{t("admission.admissionFinalText")}</div>
          </span>
        </div>
      </div>
    </div>
  );
};
