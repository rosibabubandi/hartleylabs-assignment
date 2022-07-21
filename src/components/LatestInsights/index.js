import insightsImage1 from "../../assets/insightsImage1.png";
import insightsImage2 from "../../assets/insightsImage2.png";
import insightsImage3 from "../../assets/insightsImage3.png";

import "./index.css";

const LatestInsights = (props) => (
  <div className="latest-insights">
    <p className="description">Blogs / News / Events</p>
    <h1 className="heading">
      Latest <span className="insights-heading">Insights</span>
    </h1>
    <div className="container">
      <div
        className="insights1"
        style={{
          backgroundImage: `url(${insightsImage1})`,
        }}
      >
        <p className="line">FEATURE | 4 min read</p>
        <h6 className="description1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h6>
        <p className="line">December 14, 2021</p>
      </div>
      <div>
        <div className="insights2">
          <div>
            <div
              style={{
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                marginLeft: 20,
                marginBottom: 10,
              }}
              className="content"
            >
              <p>BLOG | 4 min read</p>
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </b>
              <p>December 14, 2021</p>
            </div>
          </div>
          <img
            className="insights-image"
            src={insightsImage2}
            alt="insights-2"
          />
        </div>
        <div className="insights2" style={{ marginTop: 10 }}>
          <img
            className="insights-image"
            src={insightsImage3}
            alt="insights-3"
            style={{ marginLeft: 20 }}
          />
          <div>
            <div
              style={{
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
              }}
              className="content"
            >
              <p>BLOG | 4 min read</p>
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </b>
              <p>December 14, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LatestInsights;
