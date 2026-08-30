import SectionHeader from "../layout/SectionHeader";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section id="cta">
      <SectionHeader text="Don't Just Listen. Experience SONA." />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl text-green-400">
        Limited launch price!!!
      </p>

      <div className="text-center">
        <p className="price old-price line-through text-xl -rotate-15 mt-[5%]">
          $79.99
        </p>
        <p className="price font-bold md:text-4xl text-3xl">$59.99</p>
        <Button text={`Get Yours`} />
      </div>
    </section>
  );
};

export default CTA;
