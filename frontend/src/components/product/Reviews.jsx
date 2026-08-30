import SectionHeader from "../layout/SectionHeader";

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
  return (
    <section id="reviews">
      <SectionHeader text="Loved By Listeners" />

      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Real impressions from listeners who made SONA ONE their own.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="border-t border-black/20 pt-6 hover:border-t-2 hover:border-black/50"
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
