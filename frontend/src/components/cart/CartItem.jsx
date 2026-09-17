const CartItem = ({ item }) => {
  return (
    <div className="flex items-center gap-6 border border-gray-200 rounded-xl p-5">
      <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0">
        <img
          src={item.color.image}
          alt={`SONA ONE headphones in ${item.color.name} color`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium">SONA ONE</h2>

        <p className="text-gray-500">{item.color.name}</p>

        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
