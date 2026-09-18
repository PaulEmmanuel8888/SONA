import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-3xl font-semibold">Your cart is empty</h2>

      <p className="text-gray-500 mt-3">
        Looks like you haven't added anything to your cart yet.
      </p>

      <Link
        to="/product"
        className="mt-8 inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-md font-medium hover:scale-105 transition-transform duration-200"
      >
        Keep Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
