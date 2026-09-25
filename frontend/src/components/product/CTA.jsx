import { Link } from "react-router-dom";
import SectionHeader from "../layout/SectionHeader";
import Button from "../ui/Button";

const CTA = () => {
  return (
    <section id="cta">
      <SectionHeader text="Don't Just Listen. Experience SONA." />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl text-green-400">
        Limited launch price!!!
      </p>

      <div className="flex flex-col items-center">
        <p className="price old-price line-through text-xl -rotate-15 mt-[5%]">
          $79.99
        </p>
        <p className="price mb-5 font-bold md:text-4xl text-3xl">$59.99</p>
        <Link to={`/product`}>
          <Button text={`Get Yours`} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
