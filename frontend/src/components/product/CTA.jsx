import SectionHeader from "../layout/SectionHeader";

const CTA = () => {
  return (
    <section id="cta">
      <SectionHeader text="Don't Just Listen. Experience SONA." />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl text-green-400">
        Limited launch price!!!
      </p>
    </section>
  );
};

export default CTA;
