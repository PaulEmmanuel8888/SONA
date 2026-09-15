const QuantitySelector = ({ quantity, setQuantity }) => {
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-center lg:text-left text-gray-500 uppercase tracking-wider">
        Quantity
      </p>

      <div className="flex items-center w-fit border border-gray-300 rounded-full overflow-hidden">
        <button
          onClick={decreaseQuantity}
          className="w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100 transition"
        >
          −
        </button>

        <span className="w-12 text-center font-medium">{quantity}</span>

        <button
          onClick={increaseQuantity}
          className="w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-100 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
