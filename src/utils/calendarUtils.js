export const calendarUtils = (
    currentDate,
    setCurrentDate,
    events,
    setEvents,
    saveEvents
) => {
    const prevMonth = () =>
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    const nextMonth = () =>
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    const goToToday = () => setCurrentDate(new Date());

    const getMonthDays = (year, month) => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDay = new Date(firstDay);
        startDay.setDate(firstDay.getDate() - firstDay.getDay());
        const endDay = new Date(lastDay);
        endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

        let days = [];
        let day = new Date(startDay);
        while (day <= endDay) {
            days.push(new Date(day));
            day.setDate(day.getDate() + 1);
        }
        return days;
    };

    const days = getMonthDays(
        currentDate.getFullYear(),
        currentDate.getMonth()
    );
    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const getEventsForDay = (date) => {
        return events.filter(
            (event) =>
                (date >= event.start_date_banner &&
                    date <= event.end_date_banner) ||
                (date.toDateString() ===
                    event.start_date_banner.toDateString() &&
                    date.toDateString() ===
                        event.end_date_banner.toDateString())
        );
    };

    const onDragStart = (event, eventId) => {
        event.dataTransfer.setData("eventId", eventId);
    };

    const onDrop = (event, newDate) => {
        const eventId = event.dataTransfer.getData("eventId");
        setEvents((prevEvents) =>
            prevEvents.map((evt) => {
                if (evt.id.toString() === eventId) {
                    const duration =
                        (evt.end_date_banner - evt.start_date_banner) /
                        (1000 * 60 * 60 * 24);
                    const newStartDate = new Date(newDate);
                    const newEndDate = new Date(newStartDate);
                    newEndDate.setDate(newStartDate.getDate() + duration);
                    return {
                        ...evt,
                        start_date_banner: newStartDate,
                        end_date_banner: newEndDate,
                        hasChanged: true,
                    };
                }
                return evt;
            })
        );
    };

    return {
        days,
        isToday,
        getEventsForDay,
        prevMonth,
        nextMonth,
        goToToday,
        onDragStart,
        onDrop,
        saveEvents,
    };
};
