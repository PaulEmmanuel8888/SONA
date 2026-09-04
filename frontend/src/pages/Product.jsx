import BackButton from "../components/ui/BackButton";

import Container from "../components/layout/Container";

import ProductImage from "../components/product/ProductImage";

import ColorSelector from "../components/product/ColorSelector";
import { useState } from "react";

const colors = [
  {
    name: "White",
    value: "#FFFFFF",
  },
  {
    name: "Black",
    value: "#000000",
  },
  {
    name: "Silver",
    value: "#D9D9D6",
  },
  {
    name: "Pink",
    value: "#FFC0CB",
  },
];

const Product = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
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
