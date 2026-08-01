import HeroImg from "../../assets/images/SONA-Hero-img.png";
import FloatingCard from "./FloatingCard";
import HeroName from "./HeroName";

const Hero = () => {
  return (
    <div className="relative">
      <HeroName
        text={"SONA ONE"}
        className="absolute top-62 left-19 text-5xl"
      />
      <img src={HeroImg} alt="SONA Hero Img" className="absolute " />
      <FloatingCard
        text={"HI-RES AUDIO"}
        className=" absolute left-2 top-27 z-[-1]"
      />
      <FloatingCard
        text={"40H BATTERY"}
        className=" absolute right-25 top-35 z-[-1]"
      />
      <FloatingCard
        text={"NOISE CANCELLATION"}
        className="w-40 absolute right-28 top-114 z-[-1]"
      />
    </div>
  );
};

export default Hero;
