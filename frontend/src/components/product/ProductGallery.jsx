import SectionHeader from "../layout/SectionHeader";
import SONAImageLeft from "../../assets/images/SONA-headset-left.png";
import SONAImageRight from "../../assets/images/SONA-headset-right.png";
import SONAImageTop from "../../assets/images/SONA-headset-top.png";
import SONAImageBottom from "../../assets/images/SONA-headset-bottom.png";
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
      <ImageContainer
        image={images[currentIndex]}
        animationKey={animationKey}
      />
    </section>
  );
};

export default ProductGallery;
