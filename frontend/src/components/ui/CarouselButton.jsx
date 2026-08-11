import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CarouselButton = ({ direction, control }) => {
  const icon = direction === "prev" ? faArrowLeft : faArrowRight;

  return (
    <button
      onClick={() => {
        control();
      }}
      className="
        w-14 h-14
        md:w-16 md:h-16
        rounded-full
        border border-black/20
        bg-white
        flex items-center justify-center
        text-black
        shadow-sm
        transition-all duration-300
        hover:bg-black
        hover:text-white
        cursor-pointer
      "
    >
      <FontAwesomeIcon icon={icon} className="text-lg md:text-xl" />
    </button>
  );
};

export default CarouselButton;
