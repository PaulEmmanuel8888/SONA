import Container from "../components/layout/Container";
import CartItem from "../components/cart/CartItem.jsx";
import { useCart } from "../context/cartContext.jsx";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <section id="cart">
      <Container className="mt-[15vh]">
        <h1 className="text-4xl mt-[5vh] font-bold">Your Cart</h1>

        <div className="flex flex-col gap-6 mt-10">
          {" "}
          {cartItems.map((item) => (
            <CartItem key={item.color.name} item={item} />
          ))}{" "}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
