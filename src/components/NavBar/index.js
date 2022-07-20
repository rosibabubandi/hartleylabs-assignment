import betacraftTitle from "../../assets/betacraftTitle.PNG";
import "./index.css";

const NavBar = (props) => {
  return (
    <nav className="navbar-container">
      <button type="button" className="toggle-button">
        <hr className="bars" />
        <hr className="bars" />
      </button>
      <img
        src={betacraftTitle}
        className="company-logo-styles"
        alt="company-logo"
      />
      <button type="button" className="navbar-button">
        CONTACT US
      </button>
    </nav>
  );
};

export default NavBar;
