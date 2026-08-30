const Button = ({
  text,
  textColor = "white",
  backgroundColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`font-bold cursor-pointer hover:scale-110 transition-transform duration-200 ease-i flex items-center justify-center rounded-md px-8 py-4 not-md:w-[60%] m-auto mt-[3vh] w-40 h-12 ${className}`}
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
