const Banner = () => {
  const benefits = [
    "Free Shipping",
    "30-Day Returns",
    "2-Year Warranty",
    "Secure Checkout",
  ];

  // Repeat the benefits enough times to keep the banner filled
  const repeatedBenefits = [...benefits, ...benefits, ...benefits];

  return (
    <section
      id="banner"
      className="relative bg-black text-white overflow-hidden py-4 mt-[10vh] rounded-xl"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {repeatedBenefits.map((benefit, index) => (
          <div
            key={`${benefit}-${index}`}
            className="flex items-center shrink-0 whitespace-nowrap"
          >
            <span className="mx-8 text-sm md:text-base font-medium">
              {benefit}
            </span>

            <span className="text-white/50">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
