import plusSymbol from "../../assets/plusSymbol.PNG";
import careersHand from "../../assets/CareersHand.PNG";
import "./index.css";

const Careers = (props) => {
  return (
    <>
      <div>
        <p className="careers-text">CAREERS</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: "50%", padding: 50 }}>
            <h1 className="join-our-team-text">
              Join our <span className="middle-word-in-getting">team</span>
            </h1>
            <hr className="hr-separator" />
            <div>
              <h1>Benefits</h1>
              <button type="button" className="plus-cancel-button">
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            </div>
            <hr className="hr-separator" />
            <div>
              <h1>Interview Process</h1>
              <button type="button" className="plus-cancel-button">
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            </div>
            <hr className="hr-separator" />
            <div>
              <h1>Opportunities</h1>
              <button type="button" className="plus-cancel-button">
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            </div>
            <hr className="hr-separator" />
          </div>
          <img src={careersHand} className="hand-images" alt="hand" />
        </div>
      </div>
    </>
  );
};
export default Careers;
