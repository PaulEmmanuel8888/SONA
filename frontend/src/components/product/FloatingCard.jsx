const FloatingCard = ({ text, className }) => {
  return (
    <div
      className={`shadow-[0px_9px_6px_0px_rgba(0,0,0,0.25)] bg-[#C5C8CE] w-26 h-18 text-wrap rounded-xl text-center flex items-center justify-center ${className}`}
    >
      <p className="text-[#FFFFFF] text-wrap text-center text-xl font-bold">
        {text}
      </p>
    </div>
  );
};

export default FloatingCard;
