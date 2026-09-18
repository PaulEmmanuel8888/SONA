import BackButton from "../components/ui/BackButton";
import Container from "../components/layout/Container";
import ProductImage from "../components/product/ProductImage";
import ColorSelector from "../components/product/ColorSelector";
import SONAHeadsetBlack from "../assets/images/SONA_headset_black.png";
import SONAHeadsetWhite from "../assets/images/SONA_headset_white.png";
import SONAHeadsetSilver from "../assets/images/SONA_headset_silver.png";
import SONAHeadsetPink from "../assets/images/SONA_headset_pink.png";
import QuantitySelector from "../components/product/QuantitySelector";
import Button from "../components/ui/Button";
import Benefits from "../components/product/Benefits";
import { useState, useEffect } from "react";
import { useCart } from "../context/cartContext";

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
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const [selectedColor, setSelectedColor] = useState(() => {
    const savedColor = localStorage.getItem("sona-selected-color");
    return colors.find((color) => color.name === savedColor) || colors[0];
  });

  const { addToCart } = useCart();

  useEffect(() => {
    localStorage.setItem("sona-selected-color", selectedColor.name);
  }, [selectedColor]);

  const handleAddToCart = () => {
    if (added) return;

    addToCart(selectedColor, quantity);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <>
      <Container>
        <BackButton />
      </Container>

      <Container className="mt-[10vh]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          <ProductImage color={selectedColor} />

          <div className="flex flex-col items-center lg:items-start gap-10">
            <ColorSelector
              colors={colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <div className="flex flex-col items-center lg:items-start gap-3">
              <Button
                text={added ? "Added to Cart" : "Add to Cart"}
                onClick={handleAddToCart}
                disabled={added}
              />

              {added && (
                <p className="text-sm text-gray-500">
                  {quantity} {quantity === 1 ? "item" : "items"} added to your
                  cart.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Benefits />
      </Container>
    </>
  );
};

export default Product;
