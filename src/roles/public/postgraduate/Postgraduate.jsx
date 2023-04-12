import { useTranslation } from "react-i18next";
import { PostgraduateData } from "./PostgraduateData";
import image6 from "../../../shared/images/image6.jpg";

export const Postgraduate = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="fiirst-container">
        <img className="fiirst-container-image" src={image6} alt="/" />
        <p className="fiirst-container-text">
          {t("undergraduate.container-1-text")}
        </p>
      </div>
      <div className="seecond-container">
        <h3 className="seecond-container-title">
          {t("undergraduate.container-2-title")}
        </h3>
        <ul className="seecond-container-text">
          {PostgraduateData.firstList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
        </ul>
      </div>
      <div className="seecond-container">
        <h3 className="seecond-container-title">
          {t("undergraduate.container-3-title")}
        </h3>
        <ol className="seecond-container-text">
          {PostgraduateData.secondList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};
