export default function BoxGrid() {
  return (
    <div className="flex flex-col gap-4 sm:grid grid-cols-[1fr_1fr_3fr_2fr_2fr] grid-rows-[1fr_1fr_2fr_2fr] relative">
      <div className="modal-grid-box col-[2/4] row-span-2"></div>
      <div className="modal-grid-box col-span-2"></div>
      <div className="modal-grid-box col-span-2"></div>
      <div className="modal-grid-box col-span-3"></div>
      <div className="modal-grid-box row-span-2"></div>
      <div className="modal-grid-box row-span-2"></div>
      <div className="modal-grid-box col-[3/4]"></div>
      {/* <div className="absolute -bottom-[60%] left-[30%] bg-[linear-gradient(180deg,#3E229F_11.42%,#060310_178%)] opacity-[.65] blur-[186px] rounded-full h-[4in] w-[4in]" /> */}
    </div>
  );
}
