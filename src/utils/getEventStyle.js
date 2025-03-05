export const getEventStyle = (event, day) => {
    const start =
        event.start_date_banner <= day && event.end_date_banner >= day;
    const end = event.end_date_banner >= day && event.start_date_banner <= day;
    const isStart =
        event.start_date_banner.toDateString() === day.toDateString();
    const isEnd = event.end_date_banner.toDateString() === day.toDateString();

    return {
        borderRadius: isStart ? "rounded-l-lg" : isEnd ? "rounded-r-lg" : "",
        gridColumn:
            start && end
                ? `span ${Math.ceil(
                      (event.end_date_banner - event.start_date_banner) /
                          (1000 * 60 * 60 * 24) +
                          1
                  )}`
                : "span 1",
    };
};
