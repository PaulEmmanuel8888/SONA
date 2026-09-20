import Container from "../components/layout/Container";
import { useState } from "react";
import { useCart } from "../context/cartContext.jsx";
const Checkout = () => {
  const [showPayment, setShowPayment] = useState(false);

  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

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

  const handlePaymentChange = (event) => {
    const { name, value } = event.target;

    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});
  const [paymentErrors, setPaymentErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const validatePayment = () => {
    const newErrors = {};

    if (!paymentData.cardName.trim()) {
      newErrors.cardName = "Name on card is required";
    }

    if (!paymentData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    }

    if (!paymentData.expiry.trim()) {
      newErrors.expiry = "Expiry date is required";
    }

    if (!paymentData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
    }

    setPaymentErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

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
          <div>
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
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                  )}
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
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.firstName}
                      </p>
                    )}
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
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.lastName}
                      </p>
                    )}
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
                  {errors.address && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.address}
                    </p>
                  )}
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
                    {errors.city && (
                      <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                    )}
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
                    {errors.state && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.state}
                      </p>
                    )}
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
                    {errors.postalCode && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.postalCode}
                      </p>
                    )}
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
                    {errors.country && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.country}
                      </p>
                    )}
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
                  {errors.phone && (
                    <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (validateForm()) {
                    setShowPayment(true);
                  }
                }}
                className="mt-8 w-full bg-black text-white py-3 rounded-md font-bold hover:scale-[1.02] transition-transform cursor-pointer"
              >
                Continue to Payment
              </button>
            </div>

            {showPayment && (
              <div className="border border-gray-200 rounded-xl p-6 mt-6">
                <h2 className="text-2xl font-semibold">Payment Information</h2>

                <p className="text-sm text-gray-500 mt-2">
                  This is a demo checkout. No real payment will be processed.
                </p>

                <div className="mt-6">
                  <label htmlFor="cardName" className="text-sm font-medium">
                    Name on Card
                  </label>

                  <input
                    id="cardName"
                    name="cardName"
                    type="text"
                    value={paymentData.cardName}
                    onChange={handlePaymentChange}
                    placeholder="Emmanuel Paul"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                  {paymentErrors.cardName && (
                    <p className="text-sm text-red-600 mt-1">
                      {paymentErrors.cardName}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <label htmlFor="cardNumber" className="text-sm font-medium">
                    Card Number
                  </label>

                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={handlePaymentChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                  />
                  {paymentErrors.cardNumber && (
                    <p className="text-sm text-red-600 mt-1">
                      {paymentErrors.cardNumber}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="expiry" className="text-sm font-medium">
                      Expiry Date
                    </label>

                    <input
                      id="expiry"
                      name="expiry"
                      type="text"
                      value={paymentData.expiry}
                      onChange={handlePaymentChange}
                      placeholder="MM/YY"
                      className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                    />
                    {paymentErrors.expiry && (
                      <p className="text-sm text-red-600 mt-1">
                        {paymentErrors.expiry}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cvv" className="text-sm font-medium">
                      CVV
                    </label>

                    <input
                      id="cvv"
                      name="cvv"
                      type="text"
                      placeholder="123"
                      value={paymentData.cvv}
                      onChange={handlePaymentChange}
                      className="w-full mt-2 border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-black transition"
                    />
                    {paymentErrors.cvv && (
                      <p className="text-sm text-red-600 mt-1">
                        {paymentErrors.cvv}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={validatePayment}
                  type="button"
                  className="mt-8 w-full bg-black text-white py-3 rounded-md font-bold hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Place Order
                </button>
              </div>
            )}
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
