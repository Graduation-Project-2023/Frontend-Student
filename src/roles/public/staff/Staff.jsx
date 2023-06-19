import { useTranslation } from "react-i18next";
import { StaffData } from "./StaffData.js";
import image6 from "../../../shared/images/image6.jpg";
import bck1 from "../staff/bck right.png";
import bck2 from "../staff/bck left.png";
import bck from "../staff/bck.png";
import book from "../staff/image 9.png";

export const Staff = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div
        className="staff-container-1"
        style={{
          backgroundImage: `url(${i18n.language === "en" ? bck1 : bck2})`,
        }}
      >
        <div>
          <h3 className="staff-container-1-title">
            {t("staff.container-1-title")}
          </h3>
          <p className="staff-container-1-text">
            {t("staff.container-1-text")}
          </p>
        </div>

        <div>
          <img className="staff-container-1-image" src={image6} alt="/" />
        </div>
      </div>

      <div className="staff-container-2">
        <div className="staff-container-2-title">
          {t("staff.container-2-title")}
        </div>

        <div className="staff-container-2-line"></div>
        <div className="staff-container-2-text">
          {t("staff.container-2-text")}
        </div>
      </div>

      <div
        className="staff-container-3"
        style={{ backgroundImage: `url(${bck})` }}
      >
        <div className="staff-container-3-content">
          <h2 className="staff-container-3-content-title">
            {t("staff.container-3-title")}
          </h2>
          <h4 className="staff-container-3-content-text">
            {" "}
            {t("staff.container-3-list-title")}{" "}
          </h4>
        </div>
        <div className="staff-container-3-txt">
          <ul>
            {StaffData.firstList.map((item) => (
              <li key={item.id}>{t(item.title)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="staff-container-4"
        style={{
          backgroundImage: `url(${i18n.language === "en" ? bck1 : bck2})`,
        }}
      >
        <div>
          <h1 className="staff-container-4-text">
            {" "}
            {t("staff.container-4-title")}
          </h1>

          <ul className="staff-container-4-list">
            {StaffData.secondList.map((item) => (
              <li key={item.id}>{t(item.title)}</li>
            ))}
          </ul>
        </div>
        <div className="staff-container-4-img">
          <img src={book} alt="/" />
        </div>
      </div>
    </div>
  );
};
