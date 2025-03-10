import { calendarUtils, getEventStyle } from "../../utils";
import { useGlobalHooks } from "../../hooks";
import { FaEdit, FaTrash } from "react-icons/fa";

const Calendar = ({ datas, setDatas, handleShowModalId, saveEvents }) => {
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
                <button
                    onClick={prevMonth}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Previous
                </button>
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
                                                        >
                                                            {event.banner_name}
                                                            <div className="absolute top-4 mb-1 right-0 hidden group-hover:flex space-x-1 bg-white p-4 z-50 rounded shadow-lg pointer-events-auto">
                                                                <button
                                                                    onClick={() =>
                                                                        handleShowModalId(
                                                                            event,
                                                                            "edit"
                                                                        )
                                                                    }
                                                                    className="bg-yellow-300 text-white p-1 rounded flex items-center cursor-pointer"
                                                                >
                                                                    <FaEdit className="mr-1" />{" "}
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    onClick={() =>
                                                                        handleShowModalId(
                                                                            event.id,
                                                                            "delete"
                                                                        )
                                                                    }
                                                                    className="bg-red-500 text-white p-1 rounded flex items-center cursor-pointer"
                                                                >
                                                                    <FaTrash className="mr-1" />{" "}
                                                                    Delete
                                                                </button>
                                                            </div>
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
            <div className="flex flex-col lg:flex-row justify-center mt-6 gap-4">
                <button
                    onClick={goToToday}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Today
                </button>
                <button
                    onClick={saveEvents}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default Calendar;
