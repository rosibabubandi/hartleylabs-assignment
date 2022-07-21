import { Component } from "react";
import NavBar from "../NavBar";
import Works from "../Works";
import About from "../About";
import Services from "../Services";
import Solutions from "../Solutions";
import Links from "../Links";
import SuccessStories from "../SuccessStories";

import plusSymbol from "../../assets/plusSymbol.PNG";
import cancelSymbol from "../../assets/cancelSymbol.png";

import solutionBlockChain from "../../assets/solutionBlockChain.PNG";
import solutionTravel from "../../assets/solutionTravel.PNG";
import solutionManufacturing from "../../assets/solutionManufacturing.PNG";
import solutionEV from "../../assets/solutionEV.PNG";
import ourWork from "../../assets/ourWork.png";

import clientsGoogle from "../../assets/clientsGoogle.PNG";
import clientsBlueYonder from "../../assets/clientsBlueYonder.PNG";
import clientsInfosys from "../../assets/clientsInfosys.PNG";
import clientsNTTDATA from "../../assets/clientsNTTDATA.PNG";
import clientsDataMetica from "../../assets/clientsDataMetica.PNG";

import "./index.css";
import LatestInsights from "../LatestInsights";

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
const servicesActiveList = [
  {
    DesignInnovation: false,
    DigitalProductEngineering: false,
    CloudAdoptationServices: false,
    DataAnalytics: false,
    DigitalMarketingStudio: false,
  },
];

const solutionsList = [
  {
    id: 1,
    title: "Blockchain",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imagePath: solutionBlockChain,
  },
  {
    id: 2,
    title: "Travel & Hospitality",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imagePath: solutionTravel,
  },
  {
    id: 3,
    title: "Manufacturing",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imagePath: solutionManufacturing,
  },
  {
    id: 4,
    title: "Electric Vehicle",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imagePath: solutionEV,
  },
  {
    id: 5,
    title: "Electric Vehicle",
    description:
      "It is a long established fact that a reader will be distracted by the readable content",
    imagePath: solutionEV,
  },
];

class HomeBanner extends Component {
  state = {
    activeWorkIndex: 0,
    servicesMainBackground: false,
    servicesActiveList: servicesActiveList,
  };

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
  setServiceToDisplay = () => {
    this.setState((prevState) => ({
      servicesMainBackground: false,
      servicesActiveList: [
        {
          ...prevState.servicesActiveList[0],
          DesignInnovation: !prevState.servicesActiveList[0].DesignInnovation,
        },
      ],
    }));
  };
  setServiceToHide = () => {
    this.setState((prevState) => ({
      servicesMainBackground: true,
      servicesActiveList: [
        {
          ...prevState.servicesActiveList[0],
          DesignInnovation: !prevState.servicesActiveList[0].DesignInnovation,
        },
      ],
    }));
  };

  render() {
    const { activeWorkIndex, servicesMainBackground, servicesActiveList } =
      this.state;
    const currentReview = worksList[activeWorkIndex];

    const servicesBackground = servicesMainBackground
      ? "services-final-main-container"
      : "services-initial-main-container";

    return (
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
        <div className={servicesBackground}>
          <p className="services-text">SERVICES</p>
          <h1 className="getting-started-with-us-text">
            Getting <span className="middle-word-in-getting">started</span>
            with us
          </h1>
          <hr className="hr-separator" />
          <div className="services-inside-container">
            <ul className="services-ul-container">
              <li className="service-text">{servicesList[0].serviceTitle}</li>
              {servicesActiveList[0].DesignInnovation ? (
                <Services serviceDetails={servicesList[0]} />
              ) : (
                ""
              )}
            </ul>
            {servicesActiveList[0].DesignInnovation ? (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToDisplay}
              >
                <img
                  src={cancelSymbol}
                  className="plus-cancel-image-size"
                  alt="cancel"
                />
              </button>
            ) : (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToHide}
              >
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            )}
          </div>
          <hr className="hr-separator" />
          <div className="services-inside-container">
            <ul className="services-ul-container">
              <li className="service-text">{servicesList[1].serviceTitle}</li>
              {servicesActiveList[0].DesignInnovation ? (
                <Services serviceDetails={servicesList[0]} />
              ) : (
                ""
              )}
            </ul>
            {servicesActiveList[0].DesignInnovation ? (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToDisplay}
              >
                <img
                  src={cancelSymbol}
                  className="plus-cancel-image-size"
                  alt="cancel"
                />
              </button>
            ) : (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToHide}
              >
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            )}
          </div>
          <hr className="hr-separator" />
          <div className="services-inside-container">
            <ul className="services-ul-container">
              <li className="service-text">{servicesList[2].serviceTitle}</li>
              {servicesActiveList[0].DesignInnovation ? (
                <Services serviceDetails={servicesList[0]} />
              ) : (
                ""
              )}
            </ul>
            {servicesActiveList[0].DesignInnovation ? (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToDisplay}
              >
                <img
                  src={cancelSymbol}
                  className="plus-cancel-image-size"
                  alt="cancel"
                />
              </button>
            ) : (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToHide}
              >
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            )}
          </div>
          <hr className="hr-separator" />
          <div className="services-inside-container">
            <ul className="services-ul-container">
              <li className="service-text">{servicesList[3].serviceTitle}</li>
              {servicesActiveList[0].DesignInnovation ? (
                <Services serviceDetails={servicesList[0]} />
              ) : (
                ""
              )}
            </ul>
            {servicesActiveList[0].DesignInnovation ? (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToDisplay}
              >
                <img
                  src={cancelSymbol}
                  className="plus-cancel-image-size"
                  alt="cancel"
                />
              </button>
            ) : (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToHide}
              >
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            )}
          </div>
          <hr className="hr-separator" />
          <div className="services-inside-container">
            <ul className="services-ul-container">
              <li className="service-text">{servicesList[4].serviceTitle}</li>
              {servicesActiveList[0].DesignInnovation ? (
                <Services serviceDetails={servicesList[0]} />
              ) : (
                ""
              )}
            </ul>
            {servicesActiveList[0].DesignInnovation ? (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToDisplay}
              >
                <img
                  src={cancelSymbol}
                  className="plus-cancel-image-size"
                  alt="cancel"
                />
              </button>
            ) : (
              <button
                type="button"
                className="plus-cancel-button"
                onClick={this.setServiceToHide}
              >
                <img
                  src={plusSymbol}
                  className="plus-cancel-image-size"
                  alt="plus"
                />
              </button>
            )}
          </div>
          <hr className="hr-separator" />
        </div>
        <div className="solutions-main-container">
          <p className="solutions-top-industries-text">INDUSTRIES</p>
          <h1 className="our-expertise-and-so">
            Our <span className="middle-word-in-expertise">expertise</span> and
            solutions
          </h1>
          <ul className="solution-item-ul-container">
            {solutionsList.map((eachSolution) => (
              <Solutions key={eachSolution.id} solutionDetails={eachSolution} />
            ))}
          </ul>
        </div>

        <div className="stories-clients-main-container">
          <SuccessStories />
        </div>
        <div className="bottom-clients-container">
          <p className="our-global-reach">OUR GLOBAL REACH</p>
          <h1 className="our-clients-love-us">
            Our clients <span className="middle-word-in-love">love</span> us,
            you will love too.
          </h1>
          <div className="clients-first-container">
            <img src={clientsGoogle} className="clients-image" alt="google" />
            <img
              src={clientsBlueYonder}
              className="clients-image"
              alt="blue yonder"
            />
            <img src={clientsInfosys} className="clients-image" alt="infosys" />
            <img
              src={clientsNTTDATA}
              className="clients-image"
              alt="ntt data"
            />
            <img
              src={clientsDataMetica}
              className="clients-image"
              alt="data metica"
            />
          </div>
          <div className="clients-first-container">
            <img
              src={clientsNTTDATA}
              className="clients-image"
              alt="ntt data"
            />
            <img src={clientsInfosys} className="clients-image" alt="infosys" />
            <img
              src={clientsDataMetica}
              className="clients-image"
              alt="data metica"
            />
            <img src={clientsGoogle} className="clients-image" alt="google" />
            <img
              src={clientsBlueYonder}
              className="clients-image"
              alt="blue yonder"
            />
          </div>
        </div>
        <LatestInsights />
        <img className="our-work-image" src={ourWork} alt="our-work" />
        <Links />
      </div>
    );
  }
}

export default HomeBanner;
