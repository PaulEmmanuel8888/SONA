const Button = ({
  text,
  textColor = "white",
  backgroundColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`font-bold cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out flex items-center justify-center rounded-md px-8 py-4 w-40 h-12 ${className}`}
      style={{
        color: textColor,
        backgroundColor,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
