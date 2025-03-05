import { calendarUtils, getEventStyle } from "../../utils";
import { useGlobalHooks } from "../../hooks";

const Calendar = ({ datas, setDatas, handleShowModalId }) => {
    const {
        currentDate,
        setCurrentDate,
        jumpYear,
        setJumpYear,
        jumpMonth,
        setJumpMonth,
    } = useGlobalHooks();

    const {
        days,
        isToday,
        getEventsForDay,
        prevMonth,
        nextMonth,
        goToToday,
        onDragStart,
        onDrop,
    } = calendarUtils(currentDate, setCurrentDate, datas, setDatas);

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
        <div className="w-full h-full p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={prevMonth}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Previous
                </button>
                <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-gray-800 mr-4">
                        {currentDate.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })}
                    </h2>
                    <select
                        value={jumpMonth}
                        onChange={(e) => setJumpMonth(Number(e.target.value))}
                        className="w-28 p-2 border border-gray-300 rounded-lg mr-2"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        value={jumpYear}
                        onChange={(e) => setJumpYear(Number(e.target.value))}
                        className="w-28 p-2 border border-gray-300 rounded-lg mr-2"
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
                <button
                    onClick={nextMonth}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Next
                </button>
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
                                                ? "bg-blue-500 text-white font-bold"
                                                : "hover:bg-gray-100"
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
                                                            }`}
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
                                                                    "edit"
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
