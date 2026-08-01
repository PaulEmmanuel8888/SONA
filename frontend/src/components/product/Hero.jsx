import HeroImg from "../../assets/images/SONA-Hero-img.png";
import FloatingCard from "./FloatingCard";
import HeroName from "./HeroName";

const Hero = () => {
  return (
    <section className="overflow-x-hidden w-full">
      {/* Other hero text/buttons go here */}

      <div className="relative min-h-[80vh] mx-auto w-[90%] max-w-sm md:max-w-lg flex flex-col items-center">
        <div className="w-full relative">
          <HeroName
            text="SONA ONE"
            className="absolute top-60 left-1/2 -translate-x-1/2 text-3xl md:text-5.5xl md:top-80"
          />

          <img
            src={HeroImg}
            alt="SONA Hero Img"
            className="w-full max-w-sm md:max-w-lg mx-auto block"
          />

          <div className="absolute top-8 left-0 w-full flex flex-wrap justify-center gap-2 md:flex-nowrap md:justify-between z-10">
            <FloatingCard text="HI-RES AUDIO" />

            <FloatingCard text="40H BATTERY" />

            <FloatingCard text="NOISE CANCELLATION" className="w-32 md:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
