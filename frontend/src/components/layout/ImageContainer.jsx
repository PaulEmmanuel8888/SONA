import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ImageContainer = ({ image, animationKey, direction }) => {
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        {
          x: direction * 35,
          autoAlpha: 0,
          scale: 0.97,
        },
        {
          x: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
        },
      );
    },
    { dependencies: [animationKey], revertOnUpdate: true },
  );

  return (
    <div className="relative w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] m-[5vw] mx-auto">
      {" "}
      <div className="absolute inset-0 rounded-full bg-[#f8f8f8] shadow-xl overflow-hidden">
        {" "}
        <img
          ref={imageRef}
          className="w-full h-full object-contain"
          src={image}
          alt="SONA ONE headphones from a different angle"
        />{" "}
      </div>
      <svg
        key={animationKey}
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#111111"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="100"
          className="animate-progress"
        />
      </svg>
    </div>
  );
};

export default ImageContainer;
