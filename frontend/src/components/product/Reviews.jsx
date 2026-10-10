import SectionHeader from "../layout/SectionHeader";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    quote:
      "The sound is incredibly clean, and the comfort makes it easy to wear for hours. SONA ONE has quickly become my everyday pair.",
    name: "Alex Morgan",
    role: "Music Producer",
  },
  {
    quote:
      "I love how understated the design is. The audio quality is impressive, the controls feel natural, and the battery easily lasts me through the week.",
    name: "Maya Bennett",
    role: "Creative Director",
  },
  {
    quote:
      "SONA ONE delivers exactly what I want from a pair of headphones—great sound, thoughtful design, and no unnecessary fuss.",
    name: "Daniel Carter",
    role: "Product Designer",
  },
];

const Reviews = () => {
  const reviewsRef = useRef(null);
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".review-card", reviewsRef.current);

      gsap.from(cards, {
        y: 35,
        rotation: 2,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: "top 75%",
          once: true,
        },
      });
    },
    { scope: reviewsRef },
  );

  return (
    <section id="reviews">
      <SectionHeader text="Loved By Listeners" />

      <p className="section-description text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Real impressions from listeners who made SONA ONE their own.
      </p>

      <div
        ref={reviewsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6"
      >
        {reviews.map((review) => (
          <article
            key={review.name}
            className="review-card border-t border-black/20 pt-6 hover:border-t-2 hover:border-black/50"
          >
            <p className="text-lg leading-relaxed mb-8">“{review.quote}”</p>

            <div>
              <p className="font-medium">{review.name}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
