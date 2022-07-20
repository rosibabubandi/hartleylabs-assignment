import worksImage from "../../assets/worksimage.PNG";
/*import { CircleArrowLeft } from "../../assets/circleArrowLeft";
import { CircleArrowRight } from "../../assets/circleArrowRight";*/
import "./index.css";

const Works = (props) => {
  const { currentReview, onClickRightArrow, onClickLeftArrow } = props;
  const {
    topHeading,
    description,
    fillingColorStage,
    droppingColorStage,
  } = currentReview;
  const topHeadingList = topHeading.split(" ");
  const lengthOfList = topHeadingList.length;
  const lastWord = topHeadingList[lengthOfList - 1];
  topHeadingList.pop();
  const remainingWords = topHeadingList.join(" ");

  const clickRightArrow = () => {
    onClickRightArrow();
  };

  const clickLeftArrow = () => {
    onClickLeftArrow();
  };

  return (
    <>
      <div className="work-details-image-container">
        <div className="work-details-container">
          <h1 className="top-head-styles">
            {remainingWords}{" "}
            <span className="last-word-in-head-styles">{lastWord}</span>
          </h1>
          <p className="work-description">{description}</p>
          <p className="discover-work-text">DISCOVER OUR WORK</p>
          <div className="completion-bar-container">
            <hr className={fillingColorStage} />
            <hr className={droppingColorStage} />
          </div>
        </div>
        <img src={worksImage} className="work-image-size" alt="supporting" />
      </div>
      <div className="work-items-bottom-controls">
        <div className="dots-container">
          <span className="dots">.</span>
          <span className="dots">.</span>
          <span className="dots">.</span>
        </div>
        <div className="work-arrow-button-controls-container">
          <button className="arrow-control-buttons" onClick={clickLeftArrow}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="circle left arrow"
            />
          </button>
          <button className="arrow-control-buttons" onClick={clickRightArrow}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="circle right arrow"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Works;
