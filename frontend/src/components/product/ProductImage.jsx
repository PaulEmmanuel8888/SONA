import HeroName from "./HeroName";

const ProductImage = ({ color }) => {
  return (
    <div className="relative w-[90%] mx-auto mt-10 aspect-square bg-gray-200 rounded-lg overflow-hidden">
      <HeroName
        text="SONA ONE"
        className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl md:text-4xl md:top-14"
      />
      <img
        src={color.image}
        alt={`SONA ONE headphones in ${color.name} color`}
        className="w-full h-full mt-10 object-contain"
      />
    </div>
  );
};

export default ProductImage;
