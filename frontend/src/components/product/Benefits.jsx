import SectionHeader from "../layout/SectionHeader";

const benefits = [
  {
    title: "✓ 30-Day Returns",
    description: "Not satisfied? Return your headphones within 30 days.",
  },
  {
    title: "✓ Free Shipping",
    description: "Fast and reliable delivery on every order.",
  },
  {
    title: "✓ 2-Year Warranty",
    description: "Built to last with warranty coverage for peace of mind.",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader text={`SHOP WITH CONFIDENCE`} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {benefits.map((benefit) => (
          <div
            className="flex flex-col items-center justify-center gap-2"
            key={benefit.title}
          >
            <h3 className="text-2xl font-bold">{benefit.title}</h3>
            <p className="text-gray-500">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
