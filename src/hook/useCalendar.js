import { useEffect, useState } from "react";
import {
  generateCalendar,
  isEventOnDate,
  isToday,
  normalizeDate,
  sortByDayRage,
} from "../pattern/calendarLogic";

export const useCalendar = (dataEvents) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [originalEvents, setOriginalEvents] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [updatedEvents, setUpdatedEvents] = useState([]);
  const [draggedEvent, setDraggedEvent] = useState(null);

  useEffect(() => {
    setEvents(sortByDayRage(dataEvents));
    setOriginalEvents(JSON.parse(JSON.stringify(sortByDayRage(dataEvents))));
    setCalendarData(generateCalendar(currentDate));
  }, [dataEvents, currentDate]);

  return {
    calendarData,
    events,
    currentDate,
    updatedEvents,
    draggedEvent,
    setEvents,
    setCurrentDate,
    setUpdatedEvents,
    setDraggedEvent,
    originalEvents,
    isEventOnDate,
    normalizeDate,
    isToday,
  };
};
