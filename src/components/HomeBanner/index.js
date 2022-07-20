import { Component } from "react";
import NavBar from "../NavBar";
import Works from "../Works";
import About from "../About";
import { Instagram } from "../../assets/instagram";
import { LeftAngle } from "../../assets/leftAngle";
import { RightAngle } from "../../assets/rightAngle";

import "./index.css";

const worksList = [
  {
    id: 1,
    topHeading: "Timeless products, great brands.",
    description:
      "We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral-and this without ever making any concessions.",
    fillingColorStage: "first-item-color-filling",
    droppingColorStage: "first-item-color-dropping",
  },
  {
    id: 2,
    topHeading: "Top class products, great value.",
    description:
      "We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral-and this without ever making any concessions.",
    fillingColorStage: "second-item-color-filling",
    droppingColorStage: "second-item-color-dropping",
  },
  {
    id: 3,
    topHeading: "First Class products, great demand.",
    description:
      "We craft outstanding direct-to-consumer brands with the common ambition to offer true craftsmanship, timeless products that are carbon neutral-and this without ever making any concessions.",
    fillingColorStage: "third-item-color-filling",
    droppingColorStage: "third-item-color-dropping",
  },
];

const servicesList = [
  {
    id: 1,
    serviceTitle: "Design & Innovation",
    description:
      "Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company.  We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses.",
    serviceList: [
      "Design Research",
      "Product Design Sprints",
      "UX/UI Design",
      "Investment Pitch Package",
      "Sales Pitch Package",
    ],
  },
  {
    id: 2,
    serviceTitle: "Digital Product Engineering",
    description:
      "Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company.  We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses.",
    serviceList: [
      "Design Research",
      "Product Design Sprints",
      "UX/UI Design",
      "Investment Pitch Package",
      "Sales Pitch Package",
    ],
  },
  {
    id: 3,
    serviceTitle: "Cloud Adoptation Services",
    description:
      "Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company.  We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses.",
    serviceList: [
      "Design Research",
      "Product Design Sprints",
      "UX/UI Design",
      "Investment Pitch Package",
      "Sales Pitch Package",
    ],
  },
  {
    id: 4,
    serviceTitle: "Data Analytics",
    description:
      "Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company.  We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses.",
    serviceList: [
      "Design Research",
      "Product Design Sprints",
      "UX/UI Design",
      "Investment Pitch Package",
      "Sales Pitch Package",
    ],
  },
  {
    id: 5,
    serviceTitle: "Digital Marketing Studio",
    description:
      "Betacraft is a trusted global Digital Product Engineering and Enterprise Modernization company.  We integrate experience design, complex engineering and domain expertise to help our clients envision what’s possible and accelerate their transition into tomorrow’s digital businesses.",
    serviceList: [
      "Design Research",
      "Product Design Sprints",
      "UX/UI Design",
      "Investment Pitch Package",
      "Sales Pitch Package",
    ],
  },
];

class HomeBanner extends Component {
  state = { activeWorkIndex: 0 };

  onClickRightArrow = () => {
    const { activeWorkIndex } = this.state;

    if (activeWorkIndex < worksList.length - 1) {
      this.setState((prevState) => ({
        activeWorkIndex: prevState.activeWorkIndex + 1,
      }));
    }
  };
  onClickLeftArrow = () => {
    const { activeWorkIndex } = this.state;

    if (activeWorkIndex > 0) {
      this.setState((prevState) => ({
        activeWorkIndex: prevState.activeWorkIndex - 1,
      }));
    }
  };

  render() {
    const { activeWorkIndex } = this.state;
    const currentReview = worksList[activeWorkIndex];
    return (
      <>
        <button className="prev-next-button">
          <LeftAngle />
        </button>
        <div className="main-home-banner">
          <NavBar />
          <div className="works-main-container">
            <Works
              key={currentReview.id}
              onClickRightArrow={this.onClickRightArrow}
              onClickLeftArrow={this.onClickLeftArrow}
              currentReview={currentReview}
            />
          </div>
          <div className="about-main-container">
            <About />
          </div>
          <div className="services-initial-main-container">
            <p className="services-text">SERVICES</p>
            <h1 className="getting-started-with-us-text">
              Getting <span className="middle-word-in-getting">started</span>{" "}
              with us
            </h1>
          </div>
          <Instagram />
        </div>
        <button className="prev-next-button">
          <RightAngle />
        </button>
      </>
    );
  }
}

export default HomeBanner;
