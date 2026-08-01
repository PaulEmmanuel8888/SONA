import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const CartIcon = () => {
  return (
    <Link to={`/cart`}>
      <FontAwesomeIcon className="text-2xl" icon={faCartShopping} />
    </Link>
  );
};

export default CartIcon;
