import Hero from "../components/product/Hero";
import Container from "../components/layout/Container";
import Features from "../components/product/Features";
const Home = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Features />
      </Container>
    </>
  );
};

export default Home;
