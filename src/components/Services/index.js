import serviceImage from "../../assets/ServiceImage.PNG";

import "./index.css";

const Services = (props) => {
  const { serviceDetails } = props;
  const { description, serviceList } = serviceDetails;

  const getActiveServices = (eachService) => {
    return (
      <li className="service-item-container">
        <p className="design-research">{eachService}</p>
      </li>
    );
  };

  return (
    <li className="services-li-container">
      <div className="services-description-container">
        <p className="betacraft-is-a-trust">{description}</p>
        <ul className="only-service-container">
          {serviceList.map((eachService) => getActiveServices(eachService))}
        </ul>
      </div>
      <img
        src={serviceImage}
        className="service-image-design"
        alt="service related"
      />
    </li>
  );
};

export default Services;
