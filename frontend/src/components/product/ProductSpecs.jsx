import SectionHeader from "../layout/SectionHeader";

const ProductSpecs = () => {
  return (
    <div id="specs">
      <SectionHeader text={`Technical Specifications`} />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        A closer look at the technical details and performance behind SONA ONE.
      </p>
    </div>
  );
};

export default ProductSpecs;
