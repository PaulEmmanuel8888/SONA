import SONALogo from "../../assets/images/SONA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../ui/CartIcon";
import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {
        /* Mobile Navbar */
        <div className="shadow md:hidden">
          <Container>
            <div className="flex flex-row justify-between w-full items-center px-6 py-4">
              <Link to={`/`}>
                <img
                  src={SONALogo}
                  alt="SONA Logo"
                  className="h-13 w-auto mr-4"
                />
              </Link>
              <div className="flex flex-row gap-10">
                <CartIcon />
                <FontAwesomeIcon
                  className="text-2xl"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  icon={isMenuOpen ? faXmark : faBarsStaggered}
                />
              </div>
            </div>
          </Container>
        </div>
      }

      {
        // Mobile Menu
        isMenuOpen && (
          <div className="flex flex-col items-center justify-center w-full md:hidden">
            <ul className="flex flex-col m-2 p-5 text-lg [&>li]:m-4 [&>li]:border-b w-7/12 text-center">
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
      {
        // Desktop menu
        <div className="hidden shadow md:block">
          <Container>
            <div className="flex justify-between items-center w-full px-8 py-4 shadow">
              <Link to="/">
                <img src={SONALogo} alt="SONA Logo" className="h-10" />
              </Link>
              <ul className="flex gap-8">
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
              <CartIcon />
            </div>
          </Container>
        </div>
      }
    </>
  );
};

export default Navbar;
