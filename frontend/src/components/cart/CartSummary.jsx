import { useCart } from "../../context/cartContext.jsx";

const CartSummary = () => {
  const { cartItems } = useCart();

  const price = 59.99;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * price,
    0,
  );

  return (
    <div className="w-full max-w-md mx-auto mt-10 border border-gray-200 rounded-xl p-6">
      <h2 className="text-2xl font-semibold">Cart Summary</h2>

      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-500">Shipping</p>
          <p className="font-medium">Free</p>
        </div>

        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-xl font-semibold">${subtotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
