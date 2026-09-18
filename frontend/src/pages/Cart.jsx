import Container from "../components/layout/Container";
import CartItem from "../components/cart/CartItem";
import EmptyCart from "../components/cart/EmptyCart";
import { useCart } from "../context/cartContext.jsx";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <section id="cart">
      <Container className="mt-[10vh]">
        <h1 className="text-2xl md:text-3xl mt-[5vh] font-bold text-center">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-6 mt-10">
            {cartItems.map((item) => (
              <CartItem key={item.color.name} item={item} />
            ))}
          </div>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </section>
  );
};

export default Cart;
