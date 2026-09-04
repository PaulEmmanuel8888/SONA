import HeroName from "./HeroName";

const ProductImage = ({ color }) => {
  return (
    <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
      <HeroName
        text="SONA ONE"
        className="absolute top-10 left-1/2 -translate-x-1/2 text-2.8xl md:text-4xl md:top-14"
      />
      <img
        src={color.image}
        alt={`SONA ONE headphones in ${color.name} color`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default ProductImage;
