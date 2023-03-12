// DONIA W RADWAN @DoniaAboelyazed @MOoradwan1
import img1 from "./images.jpeg";

export const Landing = () => {
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

      <div className="first-container">
        <p>
          <h3 className="first-container-title">
            Welcome to suez canal university
          </h3>
          From your professors to your friends and teammates, Suez Canal
          University is a vibrant community where you can always feel supported
          and encouraged. No matter where you come from, this university is home
          and is designed to help you learn about life and work. Suez Canal
          University has 16 faculties and 4 Institutes which allow students
          choose freely between multiple varieties.
          <br />
          SCU is a community of talented students, teachers, and researchers. In
          addition to a wide range of professional, administrative support and
          service staff; all of whom are committed to help change this world for
          the better. Also, we encourage each other to work hard, not only to
          earn degrees or public recognition, but also to be leaders in this
          changing world. SCU seeks to prepare students for our diverse and
          connected world by creating an inclusive educational experience and a
          culture that respects the dignity of each individual on our campus. We
          are looking forward be an inclusive university that addresses
        </p>
        <img className="first-container-image" src={img1} alt="/" />
      </div>

      <div className="second-container">
        <p className="second-container-text">
          Applicants must complete all secondary school graduation requirements,
          maintain a high level of academic performance and submit all required
          documents before the set deadlines. Having the minimum academic
          requirements does not guarantee admission to the University, but
          rather ensures entry to the selection process. There is a minimum
          level of academic achievement for each faculty that is decided by the
          supreme council of universities each year.
          <br/>
          SCU offers outstanding undergraduate curricula to its students. Those
          programs are instructed by exceptional professors, PhD holders and
          scholars of internationally recognized research and academic
          institutes. We are proud to have a unique and well qualified staff
          that brings perfection to our students and to our institute.
        </p>
        <h5 className="second-container-title">
          <div className="trapeziod1"></div>
          <div className="trapeziod2"></div>
          How to qualify <br /> for admission
        </h5>
      </div>

      <div className="third-container">
        <h5 className="third-container-title">How to apply</h5>
        <p className="third-container-text">
          To qualify for admission, applicants must complete secondary school
          graduation requirements and submit all required documents before the
          deadline to Join SCU for the academic year. Here are the documents
          needed to join us at SCU: <br />
          1. Original Secondary-year school Certificate
          <br />
          2. Original Birth Certificate <br />
          3. 10 recent personal photos <br />
          4. The original military ID for male students who are above 19 years
          (Namouzag 6 Gond)
          <br />
          5. Military Service Form (Namouzag 2 Gond), for Egyptian male students
          only <br />
          6. A copy of the students' national ID card. <br />
          7. A Medical report stamped by the Medical sector of the Egyptian
          Ministry of Higher Education The student must fill this application
          form and submit it before the due date
        </p>
      </div>
    </div>
  );
};
