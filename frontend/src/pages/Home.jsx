import Hero from "../components/product/Hero";
import Container from "../components/layout/Container";
import Features from "../components/product/Features";
import ProductGallery from "../components/product/ProductGallery";
import ProductSpecs from "../components/product/ProductSpecs";

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <ProductGallery />
      </Container>
      <Container>
        <ProductSpecs />
      </Container>
    </>
  );
};

export default Home;
