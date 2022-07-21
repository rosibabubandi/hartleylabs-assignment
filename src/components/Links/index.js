import { CircleArrowUp } from "../../assets/circleArrowUp";
import "./index.css";
import betacraftTitle from "../../assets/betacraftTitle.PNG";
import { LinkedIn } from "../../assets/linkedin";
import { Instagram } from "../../assets/instagram";
import { Twitter } from "../../assets/twitter";
import { Facebook } from "../../assets/facebook";

const linksDetails = [
  {
    title: "Services",
    links: [
      "Design & Innovation",
      "Digital Product Engineering",
      "Cloud Adoptation Services",
      "Data Analytics",
      "Digital Marketing Studio",
    ],
  },
  {
    title: "Industries",
    links: [
      "Blockchain",
      "Travel & Hospitality",
      "Manufacturing (OEM's)",
      "Electric Vehicle (EV)",
      "Loyalty",
      "Martech",
      "GIS",
      "eLearning",
    ],
  },
  {
    title: "Company",
    links: ["About", "Work", "Insights", "Partners", "Careers", "Contact us"],
  },
  {
    title: "Other",
    links: [
      "Code of Conduct",
      "Privay Notice",
      "Cookie Policy",
      "Terms of Use",
    ],
  },
];

const Links = (props) => (
  <>
    <div className="links-section">
      <div className="up-arrow">
        <CircleArrowUp />
      </div>
      <img src={betacraftTitle} alt="betacraft -title" />
      <div className="links-details">
        {linksDetails.slice(0, linksDetails.length - 1).map((linkDetails) => (
          <div>
            <h6 className="links-heading">{linkDetails.title}</h6>
            {linkDetails.links.map((link) => (
              <p className="links">{link}</p>
            ))}
          </div>
        ))}
        <div>
          <h6 className="links-heading">{linksDetails[3].title}</h6>
          {linksDetails[3].links.map((link) => (
            <p className="links">{link}</p>
          ))}
          <h6 className="links-heading">Follow us</h6>
          <div className="social-links-container">
            <LinkedIn />
            <Instagram />
            <Facebook />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p className="links">© 2021 betacraft. All Rights Reserved </p>
    </div>
  </>
);

export default Links;
