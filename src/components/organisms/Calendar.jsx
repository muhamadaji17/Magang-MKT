import { calendarUtils, getEventStyle } from "../../utils";
import { useCalendarHooks } from "../../hooks";

const Calendar = ({ datas, setDatas, handleShowModalId, saveEvents }) => {
    const {
        currentDate,
        setCurrentDate,
        jumpYear,
        setJumpYear,
        jumpMonth,
        setJumpMonth,
    } = useCalendarHooks();

    const {
        days,
        isToday,
        getEventsForDay,
        prevMonth,
        nextMonth,
        goToToday,
        onDragStart,
        onDrop,
        hasChanges, // Add this line
    } = calendarUtils(currentDate, setCurrentDate, datas, setDatas, saveEvents);

    const months = Array.from({ length: 12 }, (_, i) =>
        new Date(0, i).toLocaleString("default", { month: "long" })
    );

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);

    const getStatusColor = (status) => (status ? "bg-green-300" : "bg-red-300");

    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const jumpToDate = () => {
        setCurrentDate(new Date(jumpYear, jumpMonth - 1, 1));
    };

    return (
        <div className="w-full h-full overflow-x-auto lg:p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:mb-6 gap-4 p-4 lg:p-0">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {currentDate.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })}
                    </h2>
                    <div className="flex items-center gap-2">
                        <select
                            value={jumpMonth}
                            onChange={(e) =>
                                setJumpMonth(Number(e.target.value))
                            }
                            className="w-28 p-2 border border-gray-300 rounded-lg"
                        >
                            {months.map((month, index) => (
                                <option key={index} value={index + 1}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            value={jumpYear}
                            onChange={(e) =>
                                setJumpYear(Number(e.target.value))
                            }
                            className="w-28 p-2 border border-gray-300 rounded-lg"
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={jumpToDate}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Jump
                        </button>
                    </div>
                </div>
                <div className="space-x-3">
                    {hasChanges && (
                        <button
                            onClick={saveEvents}
                            className="w-24 h-12 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Save
                        </button>
                    )}
                    <button
                        onClick={prevMonth}
                        className="w-24 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Previous
                    </button>
                    <button
                        onClick={nextMonth}
                        className="w-24 h-12 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Next
                    </button>
                </div>
            </div>
            <table className="w-full text-center border-collapse border border-gray-300">
                <thead>
                    <tr>
                        {weeks.map((day) => (
                            <th
                                key={day}
                                className="border border-gray-300 p-3 bg-gray-200 font-semibold text-gray-700"
                            >
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: days.length / 7 }, (_, weekIndex) => (
                        <tr key={weekIndex}>
                            {days
                                .slice(weekIndex * 7, (weekIndex + 1) * 7)
                                .map((day, index) => (
                                    <td
                                        key={index}
                                        className={`relative border border-gray-300 py-4 ${
                                            day.getMonth() !==
                                            currentDate.getMonth()
                                                ? "text-gray-400"
                                                : "text-gray-800"
                                        } ${
                                            isToday(day)
                                                ? "text-sky-600 font-bold"
                                                : ""
                                        }`}
                                        onDragOver={(e) => e.preventDefault()}
                                        onDrop={(e) => onDrop(e, day)}
                                    >
                                        <div className="flex flex-col h-full">
                                            <div className="flex justify-between">
                                                <span>{day.getDate()}</span>
                                            </div>
                                            <div className="flex-grow mt-2">
                                                {getEventsForDay(day).map(
                                                    (event, idx) => (
                                                        <div
                                                            key={idx}
                                                            className={`relative ${getStatusColor(
                                                                event.status
                                                            )} text-gray-800 p-1 cursor-pointer ${
                                                                getEventStyle(
                                                                    event,
                                                                    day
                                                                ).borderRadius
                                                            } group`}
                                                            draggable
                                                            onDragStart={(e) =>
                                                                onDragStart(
                                                                    e,
                                                                    event.id
                                                                )
                                                            }
                                                            style={{
                                                                gridColumn:
                                                                    getEventStyle(
                                                                        event,
                                                                        day
                                                                    )
                                                                        .gridColumn,
                                                            }}
                                                            onClick={() =>
                                                                handleShowModalId(
                                                                    event,
                                                                    "special"
                                                                )
                                                            }
                                                        >
                                                            {event.banner_name}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-6">
                <button
                    onClick={goToToday}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Today
                </button>
            </div>
        </div>
    );
};

export default Calendar;
