import BackButton from "../components/ui/BackButton";

import Container from "../components/layout/Container";

import ProductImage from "../components/product/ProductImage";

import ColorSelector from "../components/product/ColorSelector";
import SONAHeadsetBlack from "../assets/images/SONA_headset_black.png";
import SONAHeadsetWhite from "../assets/images/SONA_headset_white.png";
import SONAHeadsetSilver from "../assets/images/SONA_headset_silver.png";
import SONAHeadsetPink from "../assets/images/SONA_headset_pink.png";

import { useState, useEffect } from "react";

const colors = [
  {
    name: "White",
    value: "#FFFFFF",
    image: SONAHeadsetWhite,
  },
  {
    name: "Black",
    value: "#000000",
    image: SONAHeadsetBlack,
  },
  {
    name: "Silver",
    value: "#D9D9D6",
    image: SONAHeadsetSilver,
  },
  {
    name: "Pink",
    value: "#FFC0CB",
    image: SONAHeadsetPink,
  },
];

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(() => {
    const savedColor = localStorage.getItem("sona-selected-color");

    return colors.find((color) => color.name === savedColor) || colors[0];
  });

  useEffect(() => {
    localStorage.setItem("sona-selected-color", selectedColor.name);
  }, [selectedColor]);

  return (
    <>
      <Container>
        <BackButton />
      </Container>

      <Container className="mt-[10vh]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          <ProductImage color={selectedColor} />

          <ColorSelector
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </Container>
    </>
  );
};

export default Product;
