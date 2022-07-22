import insightsImage1 from "../../assets/insightsImage1.png";
import insightsImage2 from "../../assets/insightsImage2.png";
import insightsImage3 from "../../assets/insightsImage3.png";

import "./index.css";

const LatestInsights = (props) => {
  return (
    <>
      <p className="blogs-news-event">Blogs / News / Events</p>
      <h1 className="latest-text">
        Latest <span className="insights-text">Insights</span>
      </h1>
      <div className="combined-container">
        <div
          className="first-left-image-container"
          style={{
            backgroundImage: `url(${insightsImage1})`,
          }}
        >
          <p className="feature-4-min-read">FEATURE | 4 min read</p>
          <h1 className="lorem-ipsum-is-simpl-copy-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <p className="december-14-2021">December 14, 2021</p>
        </div>
        <div className="second-right-combined-container">
          <div className="right-first-container">
            <div className="right-first-text-container">
              <p className="blog-4-min-read">BLOG | 4 min read</p>
              <p className="lorem-ipsum-is-simpl-copy-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="december-14-2021-copy">December 14, 2021</p>
            </div>
            <img
              className="right-first-image"
              src={insightsImage2}
              alt="right-first"
            />
          </div>
          <div className="right-first-container">
            <img
              className="right-first-image"
              src={insightsImage3}
              alt="insights-3"
            />

            <div className="right-first-text-container">
              <p className="blog-4-min-read">BLOG | 4 min read</p>
              <p className="lorem-ipsum-is-simpl-copy-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="december-14-2021-copy">December 14, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestInsights;
