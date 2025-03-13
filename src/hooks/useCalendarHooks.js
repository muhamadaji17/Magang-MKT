import { useState } from "react";

const useCalendarHooks = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [jumpMonth, setJumpMonth] = useState(currentDate.getMonth() + 1);
    const [jumpYear, setJumpYear] = useState(currentDate.getFullYear());

    return {
        currentDate,
        setCurrentDate,
        jumpMonth,
        setJumpMonth,
        jumpYear,
        setJumpYear,
    };
};

export default useCalendarHooks;
