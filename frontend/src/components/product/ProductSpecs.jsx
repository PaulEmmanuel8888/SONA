import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";

const specifications = [
  {
    title: "Audio",
    specs: [
      ["Driver Size", "40 mm"],
      ["Frequency Response", "20 Hz – 20 kHz"],
      ["Audio Type", "Stereo"],
      ["Impedance", "32 Ω"],
      ["Noise Cancellation", "Active Noise Cancellation"],
    ],
  },
  {
    title: "Battery",
    specs: [
      ["Playback Time", "Up to 40 hours"],
      ["Charging", "USB-C"],
      ["Quick Charge", "30 min → 5 hours"],
      ["Full Charge", "Approximately 2 hours"],
    ],
  },
  {
    title: "Connectivity",
    specs: [
      ["Bluetooth", "5.3"],
      ["Wireless Range", "Up to 10 m"],
      ["Multipoint", "Yes"],
    ],
  },
  {
    title: "Design",
    specs: [
      ["Weight", "265 g"],
      ["Ear Cushions", "Memory foam"],
      ["Controls", "Touch controls"],
      ["Microphones", "4-mic array"],
      ["Foldable", "Yes"],
    ],
  },
];

const ProductSpecs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="specs">
      <SectionHeader text="Technical Specifications" />

      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        A closer look at the technical details and performance behind SONA ONE.
      </p>

      <div className="mx-auto max-w-3xl mb-[15vh]">
        {specifications.map((category, index) => (
          <div key={category.title} className="border-b border-black/20">
            <button
              onClick={() => handleAccordion(index)}
              className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
            >
              <span className="text-xl font-medium">{category.title}</span>

              <span
                className={`
                  text-2xl
                  transition-transform duration-300
                  ${openIndex === index ? "rotate-45" : "rotate-0"}
                `}
              >
                +
              </span>
            </button>

            <div
              className={`
                grid
                transition-[grid-template-rows]
                duration-500
                ease-in-out
                ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
              `}
            >
              <div className="overflow-hidden">
                <div className="pb-6">
                  {category.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between gap-6 py-3 text-gray-600"
                    >
                      <span>{label}</span>

                      <span className="text-right text-black">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSpecs;
