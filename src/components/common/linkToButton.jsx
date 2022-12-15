import { Link } from "react-router-dom";

const LinkToButton = ({ btnColor, toLink, btnName }) => {
  return (
    <div className="d-grid mb-3 ">
      <Link className={`btn btn-outline-${btnColor}`} to={toLink}>
        {btnName}
      </Link>
    </div>
  );
};

export default LinkToButton;