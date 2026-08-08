import Hero from "../components/product/Hero";
import Container from "../components/layout/Container";
import Features from "../components/product/Features";
import ProductGallery from "../components/product/ProductGallery";

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
    </>
  );
};

export default Home;
