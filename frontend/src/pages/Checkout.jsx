import Container from "../components/layout/Container";
import { useState } from "react";
import { useCart } from "../context/cartContext.jsx";
const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { cartItems } = useCart();

  const price = 59.99;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * price,
    0,
  );
  return (
    <section id="checkout">
      <Container className="mt-[10vh]">
        <h1 className="text-4xl font-bold">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 mt-10">
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">Customer Information</h2>

            <div className="mt-6">
              <h3 className="text-lg font-medium">Contact Information</h3>

              <div className="mt-4">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                />
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium">Shipping Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>

                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    id="firstName"
                    type="text"
                    placeholder="Emmanuel"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>

                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    id="lastName"
                    type="text"
                    placeholder="Paul"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="address" className="text-sm font-medium">
                  Address
                </label>

                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  id="address"
                  type="text"
                  placeholder="123 Main Street"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="city" className="text-sm font-medium">
                    City
                  </label>

                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    id="city"
                    type="text"
                    placeholder="City"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="text-sm font-medium">
                    State / Province
                  </label>

                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    id="state"
                    type="text"
                    placeholder="Lagos"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="postalCode" className="text-sm font-medium">
                    Postal / ZIP Code
                  </label>

                  <input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    id="postalCode"
                    type="text"
                    placeholder="800001"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="text-sm font-medium">
                    Country
                  </label>

                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    id="country"
                    type="text"
                    placeholder="Nigeria"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold">Order Summary</h2>

            <div className="flex flex-col gap-6 mt-6">
              {cartItems.map((item) => (
                <div
                  key={item.color.name}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={item.color.image}
                        alt={`SONA ONE headphones in ${item.color.name} color`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium">SONA ONE</h3>
                      <p className="text-sm text-gray-500">{item.color.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-medium">
                    ${(price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-5 flex flex-col gap-4">
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
                  <p className="text-xl font-semibold">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
