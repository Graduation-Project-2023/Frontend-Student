import { AiFillFacebook, AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import logo from "./logo.png";

export const TestingPage = () => {
  return (
    <div>
      <header className="hbody">
        <div className="hbody-options">
          <button className="langbtn">EN</button>

          <a href="/#" className="fblogo">
            <AiFillFacebook />
          </a>
          <a href="/#" className="ytlogo">
            <AiFillYoutube />
          </a>
          <label className="search-icon">
             < AiOutlineSearch/>
            <input
            
              type="search"
              class="search-field"
              placeholder="Search …"
              value=""
              name="s"
              title="Search for:"
            />
          </label>
          
        </div>

        <div className="hbody-text"> suez canal university</div>

        <div>
          {" "}
          <img className="hbody-logo" src={logo} alt="/" />
        </div>
      </header>

      {/* <ForgotPwd icon={""} header={""} /> */}
    </div>
  );
};
