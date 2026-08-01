const FloatingCard = ({ text, className = "" }) => {
  return (
    <div
      className={`
        shadow-[0px_6px_3px_0px_rgba(0,0,0,0.25)]
        bg-[#C5C8CE]
        w-28 h-14
        sm:w-30 sm:h-16
        md:w-32 md:h-20
        lg:w-36 lg:h-24
        rounded-xl
        flex items-center justify-center
        ${className}
      `}
    >
      <p className="text-xs text-white sm:text-sm md:text-base lg:text-lg font-bold px-2 text-center">
        {text}
      </p>
    </div>
  );
};

export default FloatingCard;
