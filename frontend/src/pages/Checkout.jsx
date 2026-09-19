import Container from "../components/layout/Container";

const Checkout = () => {
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
