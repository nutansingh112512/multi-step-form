function Step({ stepNo, stepDesc, active, onClick }) {
  return (
    <div onClick={onClick} className="text-white uppercase flex items-center gap-3 cursor-pointer">
      <div className={`w-8 h-8 md:w-9 md:h-9 flex justify-center items-center border-white border  rounded-full text-sm md:text-base ${active? "bg-[#c5defb] text-[#102957]" : ""}`}>
        <p>{stepNo}</p>
      </div>
      <div className="hidden md:flex flex-col">
        <p className="font-light text-sm">STEP {stepNo}</p>
        <p className="font-bold">{stepDesc}</p>
      </div>
    </div>
  );
}

export default Step;
