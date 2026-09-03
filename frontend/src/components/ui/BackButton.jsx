import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = () => {
  return (
    <div className="mt-[5vh]">
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} /> {"  "} <span>BACK</span>
      </Link>
    </div>
  );
};

export default BackButton;
