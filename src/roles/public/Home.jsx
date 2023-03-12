import { useNavigate } from "react-router-dom";

// Reusable Components and Images
import managInfo from "../../shared/images/managmentInfo.jpeg";
import HR from "../../shared/images/humanResource.jpg";
import eLearning from "../../shared/images/eLearning.jpeg";
import digital from "../../shared/images/digitalTrans.png";
import graduate from "../../shared/images/graduating.jpeg";
import { HiArrowNarrowRight, HiOutlineAcademicCap } from "react-icons/hi";
import { FaChalkboardTeacher, FaChild } from "react-icons/fa";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="home-bg">
          <div className="home-btns">
            <button className="home-btn" onClick={() => navigate("")}>
              <h1 className="home-btn-icon">
                <FaChalkboardTeacher />
              </h1>
              Staff & Employees
            </button>

            <button className="home-btn">
              <h1 className="home-btn-icon">
                <FaChild />{" "}
              </h1>
              Undergraduate students
            </button>
            <button className="home-btn">
              <h1 className="home-btn-icon">
                <HiOutlineAcademicCap />{" "}
              </h1>{" "}
              Postgraduate students
            </button>
          </div>
        </div>
      </div>

      <div className="aboutUs">
        <h4 className="aboutUs-title">About Us</h4>
        <p className="aboutUs-text">
          SCU is a community of talented students, teachers, and researchers. In
          addition to, a wide range of professional, administrative support and
          service staff; all of whom are committed to help change this world for
          the better. Also, we encourage each other to work hard, not only to
          earn degrees or public recognition, but also to be leaders in this
          changing world.
        </p>

        <h5 className="aboutUs-end">contact us</h5>
      </div>

      <div className="home-container">
        <div className="home-container-title">
          Training courses and e-learning <br />
          University services
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
              Managment information systems unit services
            </h4>
            <h6 className="home-container-grid-news-content">
              Book training for the basics of digital transformation certificate
              for postgraduate studies abroad at Suez Canal University
            </h6>
            <button className="home-container-grid-news-btn">visit</button>
          </div>

          <div className="home-container-grid-news">
            <img className="home-container-grid-news-pic" src={HR} alt="/" />
            <h4 className="home-container-grid-news-title">
              {" "}
              Human Resourse Develpoment
            </h4>
            <h6 className="home-container-grid-news-content">
              Developing the skills of faculty members and students in order to
              develop the educational and research process at Suez Canal
              University.
            </h6>
            <button className="home-container-grid-news-btn">visit</button>
          </div>

          <div className="home-container-grid-news">
            <img
              className="home-container-grid-news-pic"
              src={eLearning}
              alt="/"
            />
            <h4 className="home-container-grid-news-title"> e-Learning unit</h4>
            <h6 className="home-container-grid-news-content">
              Supporting e-learning by converting university courses into
              electronic courses and broadcasting them on the university’s
              website, and spreading the culture of e-learning.
            </h6>
            <button className="home-container-grid-news-btn">visit</button>
          </div>
          <div className="home-container-grid-news">
            <img
              className="home-container-grid-news-pic"
              src={digital}
              alt="/"
            />
            <h4 className="home-container-grid-news-title">
              {" "}
              Certificate in Fundamentals of Digital Transformation
            </h4>
            <h6 className="home-container-grid-news-content">
              Book training for the basics of digital transformation certificate
              for postgraduate studies abroad at Suez Canal University.
            </h6>

            <button className="home-container-grid-news-btn">visit</button>
          </div>
        </div>
      </div>
      <div className="latestNews">
        <div className="latestNews-title">
          {" "}
          Latest news & Upcoming <br /> events
        </div>

        <div className="latestNews-container">
          <img className="latestNews-container-pic" src={graduate} alt="/" />
          <h6 className="latestNews-container-date"> March,2023</h6>
          <h6 className="latestNews-container-news">
            Towards future education in the light of sustainable development…
            The fourth conference for educational and applied research for
            postgraduate studies will start tomorrow .
          </h6>
          <div className="latestNews-container-btn">
            {" "}
            <HiArrowNarrowRight />
          </div>
        </div>

        <div className="latestNews-container">
          <img className="latestNews-container-pic" src={graduate} alt="/" />
          <h6 className="latestNews-container-date"> March,2023</h6>
          <h6 className="latestNews-container-news">
            Towards future education in the light of sustainable development…
            The fourth conference for educational and applied research for
            postgraduate studies will start tomorrow .
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
