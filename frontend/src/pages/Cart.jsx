import Container from "../components/layout/Container";
import { useCart } from "../context/cartContext.jsx";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <section id="cart">
      <Container className="mt-[10vh]">
        <h1 className="text-4xl font-bold">Your Cart</h1>

        <div className="mt-10">
          {cartItems.map((item) => (
            <div key={item.color.name}>
              <p>{item.color.name}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cart;
