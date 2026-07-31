import SONALogo from "../../assets/images/SONA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {
        /* Mobile Navbar */
        <div className="flex flex-row justify-between w-full shadow items-center px-6 py-4">
          <Link to={`/`}>
            <img src={SONALogo} alt="SONA Logo" className="h-10 w-auto mr-4" />
          </Link>
          <span>Cart Icon</span>
          <FontAwesomeIcon
            onClick={() => setIsMenuOpen((prev) => !prev)}
            icon={isMenuOpen ? faXmark : faBarsStaggered}
          />
        </div>
      }

      {
        // Mobile Menu
        isMenuOpen && (
          <div className="flex flex-col items-center justify-center ">
            <ul className="flex flex-col m-2 p-5 text-lg border [&>li]:m-4">
              <li>
                <Link to={`/#features`}>Features</Link>
              </li>
              <li>
                <Link to={`/#gallery`}>Gallery</Link>
              </li>
              <li>
                <Link to={`/#specs`}>Specs</Link>
              </li>
              <li>
                <Link to={`/#reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        )
      }
    </>
  );
};

export default Navbar;
