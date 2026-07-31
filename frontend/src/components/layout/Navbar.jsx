import SONALogo from "../../assets/images/SONA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex flex-row justify-between w-full shadow items-center px-6 py-4">
      <FontAwesomeIcon
        onClick={() => setIsMenuOpen((prev) => !prev)}
        icon={isMenuOpen ? faXmark : faBarsStaggered}
      />
      <img src={SONALogo} alt="SONA Logo" className="h-10 w-auto mr-4" />
      <span>Cart Icon</span>
    </div>
  );
};

export default Navbar;
