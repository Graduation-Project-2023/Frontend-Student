import { useTranslation } from "react-i18next";
import { PostgraduateData } from "./PostgraduateData";
import image6 from "../../../shared/images/image6.jpg";
import back2 from "../staff/bck right.png";
import back1 from "../staff/bck left.png";
import img from "../../../shared/images/doc.jpg"

export const Postgraduate = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="fiirst-container" style={{ backgroundImage: `url(${back2})` }}>
        <img className="fiirst-container-image" src={image6} alt="/" />
        <p className="fiirst-container-text">
          {t("undergraduate.container-1-text")}
        </p>
      </div>



      <div className="seecond-container">
        <div className="seecond-container-box">
        <h3 className="seecond-container-title">
          {t("undergraduate.container-2-title")}
        </h3>
        <div className="seecond-container-line"></div>
        <ul className="seecond-container-text">
          {PostgraduateData.firstList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
        </ul>
        </div>

        <div  className="seecond-container-box">
        <h3 className="seecond-container-title">
          {t("undergraduate.container-2-title")}
        </h3>
        <div className="seecond-container-line"></div>
        <ul className="seecond-container-text">{PostgraduateData.thirdList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}</ul>
          </div>
      </div>
      <div className="thirdd-container " style={{ backgroundImage: `url(${back1})` }}>
        <div className="thirdd-container-img"> <img src={img} alt="/" /> </div>
        <div>
        <h3 className="thirdd-container-title">
          {t("undergraduate.container-3-title")}
        </h3>
        <ol className="thirdd-container-text">
          {PostgraduateData.secondList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
        </ol>
        </div>
      </div>
    </div>
  );
};
