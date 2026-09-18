import { useCart } from "../../context/cartContext.jsx";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const price = 59.99;

  const decreaseQuantity = () => {
    updateQuantity(item.color.name, Math.max(item.quantity - 1, 1));
  };

  const increaseQuantity = () => {
    updateQuantity(item.color.name, item.quantity + 1);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border border-gray-200 rounded-xl p-5">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0">
          <img
            src={item.color.image}
            alt={`SONA ONE headphones in ${item.color.name} color`}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-medium">SONA ONE</h2>

          <p className="text-gray-500">{item.color.name}</p>

          <div className="flex items-center w-fit border border-gray-300 rounded-full overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="w-10 h-10 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100 transition"
            >
              −
            </button>

            <span className="w-10 text-center font-medium">
              {item.quantity}
            </span>

            <button
              onClick={increaseQuantity}
              className="w-10 h-10 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.color.name)}
            className="w-fit px-3 py-1.5 text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer hover:text-red-600 hover:border-red-600 hover:bg-red-50 transition"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="text-left sm:text-right">
        <p className="text-sm text-gray-500">${price.toFixed(2)} each</p>

        <p className="text-xl font-semibold mt-1">
          ${(price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
