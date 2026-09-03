import HeroName from "./HeroName";

const ProductImage = () => {
  return (
    <div className="relative w-full aspect-square bg-gray-200 overflow-hidden">
      <HeroName
        text="SONA ONE"
        className="absolute top-10 left-1/2 -translate-x-1/2 text-2.8xl md:text-4xl md:top-14"
      />
      <img alt="SONA ONE headphones" className="w-full h-full object-contain" />
    </div>
  );
};

export default ProductImage;
