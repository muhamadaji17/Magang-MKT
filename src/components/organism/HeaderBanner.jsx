import { Button } from "..";

const HeaderBanner = ({
  monthNames,
  currentDate,
  handleNextMonth,
  handlePrevMonth,
  handleNextYear,
  handlePrevYear,
  handleToday,
  movedBanners,
  handleSaveChanges,
}) => {
  return (
    <>
      <div className="w-full py-6 px-4 shadow-xl flex justify-between items-center">
        <div className="text-gray-800 text-xl flex gap-4">
          <button className="text-blue-500" onClick={handlePrevMonth}>
            {"<"}
          </button>
          <h1 className="font-bold uppercase">{monthNames}</h1>
          <button className="text-blue-500" onClick={handleNextMonth}>
            {">"}
          </button>
        </div>
        <div>
          <button
            className="bg-gray-800 text-slate-200 px-8 py-1 rounded-full"
            onClick={handleToday}
          >
            Today
          </button>
        </div>
        <div className="flex items-center gap-6">
          {movedBanners.length > 0 && (
            <Button
              className="text-white hover:bg-blue-600 transition-all duration-300"
              onClick={handleSaveChanges}
            >
              Save
            </Button>
          )}
          <button className="text-blue-500" onClick={handlePrevYear}>
            {"<"}
          </button>
          {currentDate}
          <button className="text-blue-500" onClick={handleNextYear}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
