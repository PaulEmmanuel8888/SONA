import {
  faBatteryFull,
  faEarListen,
  faLink,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "../layout/SectionHeader";
import Card from "../ui/Card";

const Features = () => {
  return (
    <section id="features">
      <SectionHeader text={`Everything You Need For Better Listening`} />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Crafted for listeners who demand clarity, comfort, and performance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-6 w-[90%] md:w-[75%] max-w-4xl mx-auto">
        <div className="md:row-span-2">
          <Card
            icon={faEarListen}
            title={`Adaptive Noise Cancellation`}
            desc={`Block out distractions and stay immersed in your music.`}
          />
        </div>
        <Card
          icon={faVolumeHigh}
          title={`Hi-Res Audio`}
          desc={`Experience crisp highs, rich bass, and balanced sound.`}
        />
        <Card
          icon={faBatteryFull}
          title={`40-Hour Battery`}
          desc={`Listen longer with up to 40 hours of uninterrupted playback.`}
        />
        <div className="md:col-span-2">
          <Card
            icon={faLink}
            title={`Bluetooth 5.3`}
            desc={`Enjoy a fast, stable connection with low-latency performance.`}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
