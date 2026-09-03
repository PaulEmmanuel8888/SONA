import BackButton from "../components/ui/BackButton";

import Container from "../components/layout/Container";

import ProductImage from "../components/product/ProductImage";

import ColorSelector from "../components/product/ColorSelector";

const Product = () => {
  return (
    <>
      <Container>
        <BackButton />
      </Container>

      <Container className="mt-[10vh]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          <ProductImage />

          <ColorSelector />
        </div>
      </Container>
    </>
  );
};

export default Product;
