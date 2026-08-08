import SectionHeader from "../layout/SectionHeader";
import SONAImageLeft from "../../assets/images/SONA-headset-left.png";
import SONAImageRight from "../../assets/images/SONA-headset-right.png";
import SONAImageTop from "../../assets/images/SONA-headset-top.png";
import SONAImageBottom from "../../assets/images/SONA-headset-bottom.png";

import ImageContainer from "../layout/ImageContainer";

const ProductGallery = () => {
  return (
    <section id="gallery">
      <SectionHeader text={`See SONA ONE From Every Angle`} />
      <p className="text-center md:m-[10vh] mb-[5vh] mt-[5vh] text-xl md:text-2xl">
        Explore every curve, detail, and feature of SONA ONE.
      </p>
      <div>
        <ImageContainer image={SONAImageTop} />
      </div>
    </section>
  );
};

export default ProductGallery;
