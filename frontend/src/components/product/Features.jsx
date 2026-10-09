import {
  faBatteryFull,
  faEarListen,
  faLink,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "../layout/SectionHeader";
import Card from "../ui/Card";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".feature-card", cardsRef.current);

      gsap.set(cards, {
        y: 60,
        autoAlpha: 0,
      });

      gsap.to(cards, {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: cardsRef },
  );
  return (
    <section id="features">
      <SectionHeader text={`Everything You Need For Better Listening`} />
      <p className="section-description text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Crafted for listeners who demand clarity, comfort, and performance.
      </p>
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-6 w-[90%] md:w-[75%] max-w-4xl mx-auto"
      >
        <div className="md:row-span-2">
          <Card
            icon={faEarListen}
            title={`Adaptive Noise Cancellation`}
            desc={`Block out distractions and stay immersed in your music.`}
            className="feature-card"
          />
        </div>
        <Card
          icon={faVolumeHigh}
          title={`Hi-Res Audio`}
          desc={`Experience crisp highs, rich bass, and balanced sound.`}
          className="feature-card"
        />
        <Card
          icon={faBatteryFull}
          title={`40-Hour Battery`}
          desc={`Listen longer with up to 40 hours of uninterrupted playback.`}
          className="feature-card"
        />
        <div className="md:col-span-2">
          <Card
            icon={faLink}
            title={`Bluetooth 5.3`}
            desc={`Enjoy a fast, stable connection with low-latency performance.`}
            className="feature-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
