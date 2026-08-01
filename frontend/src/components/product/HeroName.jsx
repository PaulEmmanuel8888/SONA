const HeroName = ({ text, className }) => {
  return <div className={`font-bold ${className}`}>{text}</div>;
};

export default HeroName;
