import { useTranslation } from "react-i18next";
import { StaffData } from "./StaffData.js";

// Reusable Components and Images
import { LandingNavbar } from "../../../components/header/LandingNavbar";
import image6 from "../../../shared/images/image6.jpg";

export const Staff = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LandingNavbar />
      <div className="staff-container-1">
        <div>
          <div>
            <h3 className="staff-container-1-title">{t('staff.container-1-title')}</h3>
          </div>
          <p className="staff-container-1-text">
          {t('staff.container-1-text')}
          </p>
        </div>
        <div>
          <img className="staff-container-1-image" src={image6} alt="/" />
        </div>
      </div>

      <div className="staff-container-2">
        <div className="staff-container-2-text">
        {t('staff.container-2-text')}
        </div>
        <div className="staff-container-2-title">
        {t('staff.container-2-title')}
        </div>
      </div>

      <div className="staff-container-3">
        <div className="staff-container-3-title">{t('staff.container-3-title')}</div>
        <div className="staff-container-3-text">
          {t('staff.container-3-list-title')}
          <ul>
          {StaffData.firstList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
          </ul>
        </div>
      </div>

      <div className="staff-container-4">
        <div className="staff-container-4-text">
        {t('staff.container-4-list-title')}
          <ul>
          {StaffData.secondList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
          </ul>
        </div>
        <div className="staff-container-4-title">{t('staff.container-4-title')}</div>
      </div>
    </div>
  );
};
