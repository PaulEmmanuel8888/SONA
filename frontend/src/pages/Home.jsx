import Hero from "../components/product/Hero";
import Container from "../components/layout/Container";
import Features from "../components/product/Features";
import ProductGallery from "../components/product/ProductGallery";
import ProductSpecs from "../components/product/ProductSpecs";
import Reviews from "../components/product/Reviews";
import FAQ from "../components/product/FAQ";
import CTA from "../components/product/CTA";

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
      <Container>
        <Reviews />
      </Container>
      <Container>
        <FAQ />
      </Container>
      <Container>
        <CTA />
      </Container>
    </>
  );
};

export default Home;
