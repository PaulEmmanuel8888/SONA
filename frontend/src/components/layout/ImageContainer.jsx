const ImageContainer = ({ image }) => {
  return (
    <div className=" max-w-[80vw] h-[80vh] flex justify-center items-center m-[5vw]">
      <img
        className="rounded-full bg-[#f8f8f8] shadow-xl mt-[-20vh] md:w-[30vw] md:scale-110 object-contain h-[70vh] "
        src={image}
        alt="SONA ONE image"
      />
    </div>
  );
};

export default ImageContainer;
