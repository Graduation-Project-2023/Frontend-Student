import { useTranslation } from "react-i18next";

// Reusable Components and Images
import right from "./right.png";
import left from "./left.png";
import bck from "./bck.png";
import managInfo from "../../../shared/images/managmentInfo.png";
import HR from "../../../shared/images/humanResource.png";
import eLearning from "../../../shared/images/eLearning.png";
import digital from "../../../shared/images/digitalTrans.png";
import corona from "../../../shared/images/corona.png";
import grad from "../../../shared/images/grad.png";
import meeting from "../../../shared/images/meeting.png";
import { FaArrowCircleRight, FaArrowCircleLeft} from "react-icons/fa";

export const Home = () => {
  const { t, i18n } = useTranslation();

  let arabimg = {};
  let engimg = { transform: "rotateY(180deg)" };

  return (
    <>
      <div className="home">
        <div className="home-bg">
          <div className="home-bg-img">
            <img src={right} alt="/" style={i18n.language === "ar" ? arabimg : engimg}/>
            <img src={left} alt="/" style={i18n.language === "ar" ? arabimg : engimg}/>
          </div>
        </div>

        <div className="home-aboutUs" style={{ backgroundImage: `url(${bck})` }}>
          <h4 className="home-aboutUs-title"> {t("home.aboutUs")}</h4>
          <p className="home-aboutUs-text">{t("home.aboutUsDescription")}</p>
          <div className="home-aboutUs-end">{t("home.contactUs")}</div>
        </div>


        <div className="home-container">
          <div className="home-container-title">
            <h3 className="home-container-title-name"> {t("home.training")}</h3>
          </div>
          <div className="home-container-grid">
            <div className="home-container-grid-news">
              <div className="home-container-grid-news-pic"><img src={managInfo} alt="/"/></div>
              <br />
              <h6 className="home-container-grid-news-title">{t("home.managementUnit")}</h6>
              {/* <button className="home-container-grid-news-btn">{t("home.more")}</button> */}
            </div>
            <div className="home-container-grid-news">
              <div className="home-container-grid-news-pic"><img src={HR} alt="/"/></div>
              <br />
              <h6 className="home-container-grid-news-title">{t("home.HR")}</h6>
              {/* <button className="home-container-grid-news-btn">{t("home.more")}</button> */}
            </div>
            <div className="home-container-grid-news">
              <div className="home-container-grid-news-pic"><img src={eLearning} alt="/"/></div>
              <br />
              <h6 className="home-container-grid-news-title">{t("home.eLearning")}</h6>
              {/* <button className="home-container-grid-news-btn">{t("home.more")}</button> */}
            </div>
            <div className="home-container-grid-news">
              <div className="home-container-grid-news-pic"><img src={digital} alt="/" /></div>
              <br />
              <h6 className="home-container-grid-news-title">{t("home.digitalTrans")}</h6>
              {/* <button className="home-container-grid-news-btn">{t("home.more")}</button> */}
            </div>
          </div>
        </div>

        <div className="home-latestNews">
          <div className="home-latestNews-title">
            <h3>{t("home.latestNews")}{t("home.events")}</h3>
          </div>
          <div className="home-latestNews-grid">
            <div className="home-latestNews-grid-icon" style={i18n.language === "ar" ? arabimg : engimg}><FaArrowCircleRight></FaArrowCircleRight></div>
            <div className="home-latestNews-grid-news">
              <div className="home-latestNews-grid-news-pic"><img src={corona} alt="/" /></div>
              <h6 className="home-latestNews-grid-news-title">{t("home.news")}</h6>
            </div>
            <div className="home-latestNews-grid-news">
              <div className="home-latestNews-grid-news-pic"><img src={meeting} alt="/" /></div>
              <h6 className="home-latestNews-grid-news-title">{t("home.news")}</h6>
            </div>
            <div className="home-latestNews-grid-news">
              <div className="home-latestNews-grid-news-pic"><img src={grad} alt="/" /></div>
              <h6 className="home-latestNews-grid-news-title">{t("home.news")}</h6>
            </div>
            <div className="home-latestNews-grid-icon" style={i18n.language === "ar" ? arabimg : engimg}><FaArrowCircleLeft></FaArrowCircleLeft></div>
          </div>
        </div>
      </div>
    </>
  );
};
