import Hero from "../components/product/Hero";
import Container from "../components/layout/Container";
import Features from "../components/product/Features";
import ProductGallery from "../components/product/ProductGallery";
import ProductSpecs from "../components/product/ProductSpecs";
import Reviews from "../components/product/Reviews";
import FAQ from "../components/product/FAQ";
import CTA from "../components/product/CTA";
import Banner from "../components/product/Banner";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeRef = useRef(null);

  useGSAP(
    () => {
      const descriptions = gsap.utils.toArray(
        ".section-description",
        homeRef.current,
      );

      descriptions.forEach((description) => {
        gsap.from(description, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: description,
            start: "top 85%",
            once: true,
          },
        });
      });
    },
    { scope: homeRef },
  );

  return (
    <main ref={homeRef}>
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
      <Container>
        <Banner />
      </Container>
    </main>
  );
};

export default Home;
