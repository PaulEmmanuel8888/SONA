import SectionHeader from "../layout/SectionHeader";
import SONAImageLeft from "../../assets/images/SONA-headset-left.png";
import SONAImageRight from "../../assets/images/SONA-headset-right.png";
import SONAImageTop from "../../assets/images/SONA-headset-top.png";
import SONAImageBottom from "../../assets/images/SONA-headset-bottom.png";

import CarouselButton from "../ui/CarouselButton";

import { useEffect, useState } from "react";

const images = [SONAImageTop, SONAImageLeft, SONAImageRight, SONAImageBottom];

import ImageContainer from "../layout/ImageContainer";

const ProductGallery = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % images.length;
    });

    setAnimationKey((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex - 1 + images.length) % images.length;
    });
    setAnimationKey((prev) => prev + 1);
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section id="gallery">
      <SectionHeader text={`See SONA ONE From Every Angle`} />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Explore every curve, detail, and feature of SONA ONE.
      </p>
      <div className="relative">
        <ImageContainer
          image={images[currentIndex]}
          animationKey={animationKey}
        />

        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <CarouselButton direction="prev" control={handlePrev} />
          <CarouselButton direction="next" control={handleNext} />
        </div>

        <div className="hidden md:flex absolute inset-y-0 left-40 items-center">
          <CarouselButton direction="prev" control={handlePrev} />
        </div>

        <div className="hidden md:flex absolute inset-y-0 right-40 items-center">
          <CarouselButton direction="next" control={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
