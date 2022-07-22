import globeImage from "../../assets/globeImage.PNG";
import aboutText from "../../assets/aboutText.PNG";

import "./index.css";

const About = (props) => {
  return (
    <>
      <img src={globeImage} className="about-globe-image" alt="globe" />
      <img src={aboutText} className="about-text-image" alt="global text" />
      <div className="about-text-container">
        <p className="who-we-are-text">WHO WE ARE</p>
        <h1 className="we-are-local-text">
          We are local, yet <span className="last-word-in-about">global.</span>
        </h1>
        <p className="about-description">
          Betacraft is a trusted global Digital Product Engineering and
          Enterprise Modernization company. We integrate experience design,
          complex engineering and domain expertise to help our clients envision
          what's possible and accelerate their transition into tomorrow's
          digital business."
        </p>
        <p className="discover-work-text">DISCOVER OUR WORK</p>
        <div className="completion-bar-container">
          <hr className="first-about-color-filling" />
          <hr className="first-about-color-dropping" />
        </div>
      </div>
    </>
  );
};

export default About;
