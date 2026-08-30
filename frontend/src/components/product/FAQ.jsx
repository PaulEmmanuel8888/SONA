import { useState } from "react";
import SectionHeader from "../layout/SectionHeader";

const faqs = [
  {
    question: "Does SONA ONE support active noise cancellation?",
    answer:
      "Yes. SONA ONE features active noise cancellation designed to reduce surrounding noise and help you stay focused on your audio.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "SONA ONE provides up to 40 hours of playback on a full charge, with USB-C charging for convenient recharging.",
  },
  {
    question: "Can I connect SONA ONE to multiple devices?",
    answer:
      "Yes. SONA ONE supports Bluetooth multipoint, allowing you to stay connected to two devices and switch between them with ease.",
  },
  {
    question: "Is SONA ONE comfortable to wear for long periods?",
    answer:
      "The memory foam ear cushions and lightweight 265 g design are made for comfortable listening sessions, whether you're working, travelling, or relaxing.",
  },
  {
    question: "Does SONA ONE come with a carrying case?",
    answer:
      "Yes. Every SONA ONE includes a protective carrying case, USB-C charging cable, and a quick start guide.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs">
      <SectionHeader text="Questions? We've Got Answers." />

      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Everything you need to know about SONA ONE.
      </p>

      <div className="mx-auto max-w-3xl mb-[15vh]">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="border-b border-black/20">
            {/* Question */}
            <button
              onClick={() => handleAccordion(index)}
              className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
            >
              <span className="text-xl font-medium">{faq.question}</span>

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

            {/* Answer */}
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
                <p className="pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
