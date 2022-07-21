import "./index.css";

const Solutions = (props) => {
  const { solutionDetails } = props;
  const { title, description, imagePath } = solutionDetails;

  return (
    <li className="each-solution-item-container">
      <img src={imagePath} className="solution-image" alt="solution support" />
      <h1 className="solution-title">{title}</h1>
      <p className="solution-description">{description}</p>
    </li>
  );
};

export default Solutions;
