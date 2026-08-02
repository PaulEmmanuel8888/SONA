import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, desc }) => {
  console.log(icon);
  return (
    <div className="flex flex-col items-center justify-between p-5 min-h-[40vh] w-[90%] m-auto border bg-black text-white rounded-2xl cursor-pointer hover:scale-110 transition-transform duration-200 ease-i">
      <FontAwesomeIcon
        icon={icon}
        color="white"
        className="mt-[5vh] text-4xl md:text5xl"
      />
      <h3 className="text-3xl md:text-4xl text-center">{title}</h3>
      <p className="text-center mb-[5vh]">{desc}</p>
    </div>
  );
};

export default Card;
