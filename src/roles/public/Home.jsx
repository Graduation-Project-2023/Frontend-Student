import { useNavigate } from "react-router-dom";

// Reusable Components and Images
import managInfo from "../../shared/images/managmentInfo.jpeg";
import HR from "../../shared/images/humanResource.jpg";
import eLearning from "../../shared/images/eLearning.jpeg";
import digital from "../../shared/images/digitalTrans.png";
import graduate from "../../shared/images/graduating.jpeg";
import { HiArrowNarrowRight, HiOutlineAcademicCap } from "react-icons/hi";
import { FaChalkboardTeacher, FaChild } from "react-icons/fa";
import { useTranslation } from "react-i18next";


export const Home = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();
  
  return (
    <>
      <div className="home">
        <div className="home-bg">
          <div className="home-btns">
            <button className="home-btn" onClick={() => navigate("")}>
              <h1 className="home-btn-icon">
                <FaChalkboardTeacher />
              </h1>
              {t('home.staff')}
            </button>

            <button className="home-btn">
              <h1 className="home-btn-icon">
                <FaChild />{" "}
              </h1>
              {t('home.undergraduate')}
            </button>
            <button className="home-btn">
              <h1 className="home-btn-icon">
                <HiOutlineAcademicCap />{" "}
              </h1>{" "}
              {t('home.postgraduate')}
            </button>
          </div>
        </div>
      </div>

      <div className="aboutUs">
        <h4 className="aboutUs-title">  {t('home.aboutUs')}</h4>
        <p className="aboutUs-text">
        {t('home.aboutUsDescription')}
        </p>

        <h5 className="aboutUs-end">{t('home.contactUs')}</h5>
      </div>

      <div className="home-container">
        <div className="home-container-title">
         <h3 className="home-container-title-name"> {t('home.training')}</h3>
          <h3 className="home-container-title-name"> {t('home.services')}</h3>
        </div>
        <div className="home-container-grid">
          <div className="home-container-grid-news">
            <img
              className="home-container-grid-news-pic"
              src={managInfo}
              alt="/"
            />
            
            <h4 className="home-container-grid-news-title">
              {" "}
              {t('home.managementUnit')}
            </h4>
            <h6 className="home-container-grid-news-content">
            {t('home.managementUnitNews')}
            </h6>
            <button className="home-container-grid-news-btn">{t('home.more')}</button>
          </div>

          <div className="home-container-grid-news">
            <img className="home-container-grid-news-pic" src={HR} alt="/" />
            <h4 className="home-container-grid-news-title">
              {" "}
              {t('home.HR')}
            </h4>
            <h6 className="home-container-grid-news-content">
            {t('home.HRNews')}
            </h6>
            <button className="home-container-grid-news-btn">{t('home.more')}</button>
          </div>

          <div className="home-container-grid-news">
            <img
              className="home-container-grid-news-pic"
              src={eLearning}
              alt="/"
            />
            <h4 className="home-container-grid-news-title"> {t('home.eLearning')}</h4>
            <h6 className="home-container-grid-news-content">
            {t('home.eLearningNews')}
            </h6>
            <button className="home-container-grid-news-btn">{t('home.more')}</button>
          </div>
          <div className="home-container-grid-news">
            <img
              className="home-container-grid-news-pic"
              src={digital}
              alt="/"
            />
            <h4 className="home-container-grid-news-title">
              {" "}
              {t('home.digitalTrans')}
            </h4>
            <h6 className="home-container-grid-news-content">
            {t('home.managementUnitNews')}
            </h6>

            <button className="home-container-grid-news-btn">{t('home.more')}</button>
          </div>
        </div>
      </div>
      <div className="latestNews">
        <div className="latestNews-title">
          {" "}
          {t('home.latestNews')} <br /> {t('home.events')}
        </div>

        <div className="latestNews-container">
          <img className="latestNews-container-pic" src={graduate} alt="/" />
          <h6 className="latestNews-container-date"> {t('home.newsDates')}</h6>
          <h6 className="latestNews-container-news">
          {t('home.news')}
          </h6>
          <div className="latestNews-container-btn">
            {" "}
            <HiArrowNarrowRight />
          </div>
        </div>

        <div className="latestNews-container">
          <img className="latestNews-container-pic" src={graduate} alt="/" />
          <h6 className="latestNews-container-date">{t('home.newsDates')}</h6>
          <h6 className="latestNews-container-news">
          {t('home.news')}
          </h6>
          <div className="latestNews-container-btn">
            {" "}
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
    </>
  );
};
