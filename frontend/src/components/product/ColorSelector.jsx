const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div>
        <p className="text-sm text-gray-500 uppercase tracking-wider">Color</p>

        <h2 className="text-2xl font-medium mt-2">{selectedColor.name}</h2>
      </div>

      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            aria-label={`Select ${color.name}`}
            className={`
              cursor-pointer
              hover:scale-110
              transition-transform
              w-12 h-12
              rounded-full
              border
              ${
                selectedColor.name === color.name
                  ? "ring-2 ring-blue-300 ring-offset-2"
                  : "border-black/20"
              }
            `}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
