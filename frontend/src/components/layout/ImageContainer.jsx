const ImageContainer = ({ image, animationKey }) => {
  return (
    <div className="relative w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] m-[5vw] mx-auto">
      {/* Circular image */}
      <div className="absolute inset-0 rounded-full bg-[#f8f8f8] shadow-xl overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt="SONA ONE image"
        />
      </div>

      {/* Progress ring */}
      <svg
        key={animationKey}
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="1.5"
        />

        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#111111"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="100"
          className="animate-progress"
        />
      </svg>
    </div>
  );
};

export default ImageContainer;
