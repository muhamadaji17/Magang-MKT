import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  differenceInDays,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { SwalAlertBasic } from "../utils";

export const moveEvent = (draggedEvent, date) => {
  if (!draggedEvent) return null;

  const startDate = new Date(draggedEvent.startDate);
  const endDate = new Date(draggedEvent.endDate);
  const daysDiff = differenceInDays(endDate, startDate);

  const newStartDate = normalizeDate(date);
  const newEndDate = new Date(newStartDate);
  newEndDate.setDate(newStartDate.getDate() + daysDiff);

  return {
    ...draggedEvent,
    startDate: format(newStartDate, "yyyy-MM-dd"),
    endDate: format(newEndDate, "yyyy-MM-dd"),
  };
};

export const handleDragStart = (index, events, setDraggedEvent) => {
  setDraggedEvent(events[index]);
};

export const handleDrop = (
  date,
  draggedEvent,
  setEvents,
  setUpdatedEvents,
  setDraggedEvent
) => {
  if (!draggedEvent) return;

  const updatedEvent = moveEvent(draggedEvent, date);

  setEvents((prevEvents) =>
    prevEvents.map((ev) => (ev.id === draggedEvent.id ? updatedEvent : ev))
  );

  setUpdatedEvents((prev) => {
    const exists = prev.some((ev) => ev.id === draggedEvent.id);
    return exists
      ? prev.map((ev) => (ev.id === draggedEvent.id ? updatedEvent : ev))
      : [...prev, updatedEvent];
  });

  setDraggedEvent(null);
};

export const handleSave = (updatedEvents, handleService, setUpdatedEvents) => {
  if (updatedEvents.length === 0) {
    SwalAlertBasic({ icon: "warning", text: "Nothing has been changed." });
    return;
  }

  const isConfirmed = confirm("Are you sure you want to save changes?");

  if (isConfirmed) {
    handleService(updatedEvents, { setUpdatedEvents, type: "updateSchedule" });
  }
};

export const handleCancel = (setEvents, originalEvents, setUpdatedEvents) => {
  setEvents(JSON.parse(JSON.stringify(originalEvents)));
  setUpdatedEvents([]);
};

export const normalizeDate = (date) => {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
};

export const isEventOnDate = (event, date) => {
  if (!event.startDate || !event.endDate) return false;

  const eventStart = normalizeDate(event.startDate);
  const eventEnd = normalizeDate(event.endDate);
  const currentDate = normalizeDate(date);

  return currentDate >= eventStart && currentDate <= eventEnd;
};

export const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const generateCalendar = (currentDate) => {
  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const daysInCalendar = eachDayOfInterval({ start: startDate, end: endDate });

  const weeks = [];
  let week = [];
  daysInCalendar.forEach((date) => {
    week.push(date);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  return weeks;
};
