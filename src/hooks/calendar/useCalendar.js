import { useState, useEffect } from "react";
import { calendarService } from "@/services/calendarService";

export const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const calendarData = calendarService.generateCalendar(currentDate);
    setCalendar(calendarData);
  }, [currentDate]);

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextYear = () => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() + 1);
    setCurrentDate(newDate);
  };

  const handlePrevYear = () => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(newDate.getFullYear() - 1);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return {
    currentDate,
    calendar,
    handleNextMonth,
    handlePrevMonth,
    handleNextYear,
    handlePrevYear,
    handleToday,
  };
};
