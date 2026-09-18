import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/cartContext.jsx";

const CartIcon = () => {
  const { cartItems } = useCart();

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="relative">
      <FontAwesomeIcon className="text-2xl" icon={faCartShopping} />

      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-black text-white text-xs font-medium">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
