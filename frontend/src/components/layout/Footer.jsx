import SONALogo from "../../assets/images/SONA.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-[15vh] px-6 md:px-10 lg:px-16 text-center"
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
          md:gap-8
          pb-12
        "
      >
        <div className="logo">
          <Link to="/">
            <img src={SONALogo} alt="SONA Logo" className="h-10 mx-auto" />
          </Link>

          <p className="font-bold text-2xl mt-4">Silence the Noise</p>
        </div>

        <div className="quick-links">
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-lg">
            <li>
              <Link
                to="/support"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                Support
              </Link>
            </li>

            <li>
              <Link
                to="/privacy"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                Privacy
              </Link>
            </li>

            <li>
              <Link
                to="/terms"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-5">
            Follow SONA
          </h3>

          <ul className="space-y-3 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                X (Twitter)
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-gray-500 transition-colors duration-200"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="
          border-t border-black/20
          py-6
          text-sm
          text-gray-500
          flex
          flex-col
          items-center
          gap-2
        "
      >
        <span>© {new Date().getFullYear()} SONA. All rights reserved.</span>

        <span>Designed for better listening.</span>
      </div>
    </footer>
  );
};

export default Footer;
