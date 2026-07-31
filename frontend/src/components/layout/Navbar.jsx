const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="../../assets/images/SONA_logo.png"
            alt="SONA logo"
            className="w-10 h-10"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex items-center">
            <li className="mr-4">
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
