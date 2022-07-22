import plusSymbol from "../../assets/plusSymbol.PNG";
import careersHand from "../../assets/CareersHand.PNG";
import "./index.css";

const Careers = (props) => {
  return (
    <>
      <p className="careers-text">CAREERS</p>
      <h1 className="join-our-team-text">
        Join our <span className="middle-word-in-getting">team</span>
      </h1>
      <div className="careers-image-container">
        <div className="career-items-container">
          <hr className="hr-separator-career" />
          <div className="career-inside-container">
            <h1 className="careers-text">Benefits</h1>
            <button type="button" className="plus-cancel-button">
              <img
                src={plusSymbol}
                className="plus-cancel-image-size"
                alt="plus"
              />
            </button>
          </div>
          <hr className="hr-separator-career" />
          <div className="career-inside-container">
            <h1 className="careers-text">Interview Process</h1>
            <button type="button" className="plus-cancel-button">
              <img
                src={plusSymbol}
                className="plus-cancel-image-size"
                alt="plus"
              />
            </button>
          </div>
          <hr className="hr-separator-career" />
          <div className="career-inside-container">
            <h1 className="careers-text">Opportunities</h1>
            <button type="button" className="plus-cancel-button">
              <img
                src={plusSymbol}
                className="plus-cancel-image-size"
                alt="plus"
              />
            </button>
          </div>
          <hr className="hr-separator-career" />
        </div>
        <img src={careersHand} className="hand-images" alt="hand" />
      </div>
    </>
  );
};
export default Careers;
