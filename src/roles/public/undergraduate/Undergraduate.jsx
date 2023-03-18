import { useTranslation } from "react-i18next";
import { UndergraduateData } from "./UndergraduateData";

// Reusable Components and Images
import { LandingNavbar } from "../../../components/header/LandingNavbar";
import image6 from "../../../shared/images/image6.jpg";

export const Undergraduate = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LandingNavbar />
      <div className="fiirst-container">
        <img className="fiirst-container-image" src={image6} alt="/" />
        <p className="fiirst-container-text">
          Suez Canal University is the leading educational and research
          institution in the Canal Region. Our academic status of glory has not
          been earned/accomplished overnight. As the university, since its
          establishment, has been more than keen to offer its attendees an
          outstanding opportunity to learn, develop, and succeed. Suez Canal
          University has recruited both of its campuses, the old and new ones,
          to support its mission and vision of continuous learning. SCU has the
          doors wide open for both the national and international students to
          join in for either a bachelor’s degree or postgraduate degree. The
          scope of learning is not limited to undergraduate education. On the
          contrary, it has extended to include postgraduate education as well,
          making Suez Canal University an Egyptian educational institution of
          remarkable variation in the offered levels of education and the
          awarded certificates. We aim to offer our students value, knowledge,
          and scientific power to make a positive change in the world. No matter
          what your scope of study is, your major subject or interest might be,
          you will find the right program for you, as SCU has 20 faculties
          operating on its campus.
        </p>
      </div>
      <div className="seecond-container">
        <h3 className="seecond-container-title">Diploma Conditions</h3>
        <ul className="seecond-container-text">
          {UndergraduateData.firstList.map((item) => (
            <li key={item.id}>{t(item.title)}</li>
          ))}
          <li>
            The student must submit a hard copy of the required documents at the
            administration's building and then submit a soft copy through the
            admission from on the website.
          </li>
          <li>
            The student selects the appropriate courses and updates the
            registration form, then passes it to the academic advisor and the
            head of the specialized scientific department for accreditation.
            Eventually, the vice dean for postgraduate studies and research
            approves of the form.
          </li>
          <li>
            If the student meets the admission criteria, he/she will not be
            admitted until the tuition fees are paid.
          </li>
          <li>
            Payment of tuition fees is a must for the student to be allowed to
            attend and record courses.
          </li>
          <li>
            A student who still has not selected his/her courses of study after
            the last week of the spring semester and the first week of the
            summer semester will not be allowed to attend lectures.
          </li>
          <li>
            The institute/faculty council may, on the recommendation of the
            department council, accept the registration of a student who holds a
            bachelor's degree in a specialization not related to the department
            after passing several supplementary courses at the Bachelor level
            established by the competent section board.
          </li>
          <li>
            If the number of the assigned courses exceeds four, the
            institute/faculty will offer the student a preparatory year for
            qualification. The year will not be counted among the official years
            of study.
          </li>
        </ul>
      </div>
      <div className="seecond-container">
        <h3 className="seecond-container-title">Required Documents</h3>
        <ol className="seecond-container-text">
          <li>Bachelor's degree certificate + a copy.</li>
          <li>Certificate of subject's grades + a copy.</li>
          <li>Birth certificate + 2 copies.</li>
          <li>Military service completion certificate + a copy.</li>
          <li>Employer's approval of the applicant's professional study.</li>
          <li>6 personal photos.</li>
          <li>Two plastic files.</li>
          <li>1 pound stamp.</li>
          <li>50L.E envelope withdrawal.</li>
          <li>Tuition fees.</li>
          <li>
            Registration in the diploma will only be accepted after fulfilling
            the conditions and documents mentioned.
          </li>
        </ol>
      </div>
    </div>
  );
};
