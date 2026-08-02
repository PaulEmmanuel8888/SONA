import HeroImg from "../../assets/images/SONA-Hero-img.png";
import FloatingCard from "./FloatingCard";
import HeroName from "./HeroName";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="overflow-x-hidden w-full flex flex-col mt-[10vh] md:mt-0  md:flex-row md:justify-between gap-[20vw] md:p-2 p-5 m-auto"
    >
      <div className="relative mx-auto md:w-[34%] w-[80%] not-md:mt-[-12%]  flex flex-col items-center">
        <div className="relative">
          <HeroName
            text="SONA ONE"
            className="absolute top-60 left-1/2 -translate-x-1/2 text-2.8xl md:text-4xl md:top-55"
          />

          <img
            src={HeroImg}
            alt="SONA Hero Img"
            className="w-full max-w-sm md:max-w-lg mx-auto block cursor-pointer"
          />

          <div className="absolute top-8 left-0 w-full flex flex-wrap justify-center gap-2 md:flex-nowrap md:justify-between  z-[-1]">
            <FloatingCard text="HI-RES AUDIO" />

            <FloatingCard text="40H BATTERY" />

            <FloatingCard text="NOISE CANCELLATION" className="w-32 md:w-40" />
          </div>
        </div>
      </div>
      <div className="hero-cta text-center font-bold mt-[-35%] md:mt-[10%] md:mr-[10%]">
        <div className="hero-text">
          <h1 className="text-3xl md:text-4xl">Silence the Noise</h1>
          <p className="price old-price line-through text-xl -rotate-15 mt-[5%]">
            $79.99
          </p>
          <p className="price text-3xl">$59.99</p>
        </div>
        <div className="hero-cta-btn mt-[10%] flex flex-col gap-2 md:gap-6  md:flex-row">
          <Link to={`/product`}>
            <Button text={`BUY`} />
          </Link>
          <a href="#features">
            <Button text={`EXPLORE`} backgroundColor="#C5C8CE" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
