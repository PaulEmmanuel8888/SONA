import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionHeader = ({ text }) => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
        once: true,
      },
    });
  });

  return (
    <h2
      ref={headerRef}
      className="text-3xl mt-[10vh] font-bold text-center md:text-4xl"
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
