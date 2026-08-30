import SONALogo from "../../assets/images/SONA.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import { Link } from "react-router-dom";

import CartIcon from "../ui/CartIcon";

import Container from "./Container";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow md:hidden">
        <Container>
          <div className="flex flex-row justify-between w-full items-center px-6 py-4">
            <Link to="/">
              <img
                src={SONALogo}
                alt="SONA Logo"
                className="h-13 w-auto mr-4"
              />
            </Link>

            <div className="flex flex-row gap-10">
              <CartIcon />

              <FontAwesomeIcon
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                icon={isMenuOpen ? faXmark : faBarsStaggered}
              />
            </div>
          </div>
        </Container>

        {isMenuOpen && (
          <div className="flex flex-col items-center justify-center w-full">
            <ul className="flex flex-col m-2 p-5 text-lg [&>li]:m-4 [&>li]:border-b w-7/12 text-center">
              <li>
                <a href="#features" onClick={handleMenuClose}>
                  Features
                </a>
              </li>

              <li>
                <a href="#gallery" onClick={handleMenuClose}>
                  Gallery
                </a>
              </li>

              <li>
                <a href="#specs" onClick={handleMenuClose}>
                  Specs
                </a>
              </li>

              <li>
                <a href="#reviews" onClick={handleMenuClose}>
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden sticky top-0 z-50 bg-white shadow md:block">
        <Container>
          <div className="flex justify-between items-center w-full px-8 py-4">
            <Link to="/">
              <img src={SONALogo} alt="SONA Logo" className="h-10" />
            </Link>

            <ul className="flex gap-8">
              <li>
                <a href="#features">Features</a>
              </li>

              <li>
                <a href="#gallery">Gallery</a>
              </li>

              <li>
                <a href="#specs">Specs</a>
              </li>

              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>

            <CartIcon />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
