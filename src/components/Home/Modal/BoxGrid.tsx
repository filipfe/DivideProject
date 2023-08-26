export default function BoxGrid() {
  return (
    <div className="min-h-[3in] lg:min-h-0 gap-4 grid grid-cols-[1fr_1fr_3fr_2fr_2fr] grid-rows-[1fr_1fr_2fr_2fr] relative">
      <div className="col-[2/4] row-span-2 relative">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
      <div className="relative col-span-2">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
      <div className="relative col-span-2">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
      <div className="relative col-span-3">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
      <div className="relative row-span-2">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
      <div className="relative row-span-2">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
      <div className="relative col-[3/4]">
        <div className="modal-grid-box" />
        <div className="bg-[linear-gradient(132deg,#52458B_0%,rgba(82,69,139,0)_100%)] -z-10 rounded-xl h-[calc(100%+1px)] w-[calc(100%+1px)] absolute top-[-1px] left-[-1px]"></div>
      </div>
    </div>
  );
}
