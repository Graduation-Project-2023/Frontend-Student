// Reusable Components and Images
import img1 from "../../shared/images/images.jpeg";

export const AdmissionInfo = () => {
  return (
    <div>
      <nav className="landing-nav">
        <a href="/#" className="landing-nav-title">
          Home
        </a>
        <a href="/#" className="landing-nav-title">
          Colleges & Departments
        </a>
        <a href="/#" className="landing-nav-title">
          Faculties & Institutes
        </a>
        <a href="/#" className="landing-nav-title">
          Research
        </a>
        <a href="/#" className="landing-nav-title">
          Centers & Units
        </a>
        <a href="/#" className="landing-nav-title">
          News
        </a>
        <a href="/#" className="landing-nav-title">
          Contact Us
        </a>
      </nav>

      <div className="admission-first-container">
        <p>
          We aim to offer our academic knowledge not only to our Egyptian
          students, but also to whoever feels the need to learn, develop, and
          succeed. At SCU, we aspire to supply our students with the knowledge
          to help change the world. We have twenty faculties actively operating
          on SCU old and new campuses, simultaneously, all to guarantee an
          organized process of continuous learning and innovation.
          <br />
          At SCU, you are free to explore the major you would like to know in
          depth.
        </p>
        <img className="admission-first-container-image" src={img1} alt="/" />
      </div>

      <div className="admission-container">
        <h4 className="admission-container-title">Admission Requierments</h4>
        <p className="admission-container-text">
          <h5 className="admission-container-text">
            1. An equivalent certificate of the latest academic qualification
            awarded by the supreme council of universities in Egypt.
          </h5>
          <h5 className="admission-container-text">
            2. A letter of candidacy from the country the student comes from to
            the faculty the student wishes to study at, clarifying the providing
            body, the university year in which the student wishes to study, and
            the degree abstained by the student.
          </h5>

          <h5 className="admission-container-text">
            3. A copy of the student's passport that is valid for one whole
            year.
          </h5>

          <h5 className="admission-container-text">
            4. A document which proves that the student does not have AIDS.
            before seeking admission or registration.
          </h5>

          <h5 className="admission-container-text">
            5. An Excellence certificate valid for one one year for medicine
            students
          </h5>

          <h5 className="admission-container-text">
            6. Filling the application forms at the desired faculty.
          </h5>

          <h5 className="admission-container-text">7. Four personal photos.</h5>

          <h5 className="admission-container-text">
            8.The grades of the four-year bachelor (for master's degree)
          </h5>

          <h5 className="admission-container-text">
            9. A diploma or pre-master certificate (for Ph.D.){" "}
          </h5>

          <div>
            After fulfilling all previous requirements, an original copy of an
            Information form and three photocopies of it have to be submitted
            with the student's signature on them. Enclosing a photocopy of the
            approval embassy's approval of the student's study at the desired
            faculty, clarifying the providing body, the university year in which
            the student wishes to study and the degree the student wishes to
            take.
          </div>
        </p>
      </div>
    </div>
  );
};
