const ColorSelector = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div>
        <p className="text-sm text-gray-500 uppercase tracking-wider">Color</p>

        <h2 className="text-2xl font-medium mt-2">White</h2>
      </div>

      <div className="flex gap-4">
        <button className="cursor-pointer hover:scale-110 w-12 h-12 rounded-full border-none bg-white ring-2 ring-blue-300 ring-offset-2" />

        <button className="cursor-pointer hover:scale-110 w-12 h-12 rounded-full bg-black border border-black/10" />

        <button className="cursor-pointer hover:scale-110 w-12 h-12 rounded-full bg-[#D9D9D6] border border-black/20" />

        <button className="cursor-pointer hover:scale-110 w-12 h-12 rounded-full bg-[#FFC0CB] border border-black/10" />
      </div>
    </div>
  );
};

export default ColorSelector;
