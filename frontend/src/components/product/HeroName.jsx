const HeroName = ({ text, className }) => {
  return <div className={`text-4xl font-bold ${className}`}>{text}</div>;
};

export default HeroName;
