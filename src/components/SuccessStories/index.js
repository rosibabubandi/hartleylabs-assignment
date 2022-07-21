import storiesQuoteIcon from "../../assets/storiesQuoteIcon.PNG";
import storiesBillGust from "../../assets/storiesBillGust.PNG";
import storiesPalyButton from "../../assets/storiesPlayButton.PNG";
import storiesLeftArrow from "../../assets/storiesLeftArrow.PNG";
import storiesRightArrow from "../../assets/storiesRightArrow.PNG";

import "./index.css";

const SuccessStories = (props) => {
  return (
    <div className="success-stories-container">
      <img src={storiesQuoteIcon} className="stories-icon-image" alt="quote" />
      <p className="lorem-ipsum-is-simple">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <img src={storiesBillGust} className="stories-icon-image" alt="ceo" />
      <p className="bill-gust-ceo-and"> - Bill Gust, CEO and President</p>
      <div className="stories-end-controls">
        <div className="stories-control-number">
          <p className="stories-numbers">02</p>
          <hr className="stories-numbers-line" />
          <p className="stories-numbers">08</p>
        </div>
        <div className="stories-control-number">
          <img
            src={storiesPalyButton}
            className="stories-icon-image"
            alt="play"
          />
          <p className="view-success-story">View Success Story</p>
        </div>
        <div className="stories-control-number">
          <button className="arrow-play-buttons">
            <img
              src={storiesLeftArrow}
              className="stories-icon-image"
              alt=" play left arrow"
            />
          </button>
          <button className="arrow-play-buttons">
            <img
              src={storiesRightArrow}
              className="stories-icon-image"
              alt=" play right arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
