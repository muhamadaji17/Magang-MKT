export const calendarService = {
  generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayMonth = new Date(year, month, 1);
    const lastDayMonth = new Date(year, month + 1, 0);

    // Perhitungan total hari yang perlu ditampilkan
    const daysInMonth = lastDayMonth.getDate();
    const firstDayOfWeek = firstDayMonth.getDay();

    // Jika kombinasi hari pertama dan jumlah hari memerlukan lebih dari 5 minggu
    const totalDays = firstDayOfWeek + daysInMonth > 35 ? 42 : 35;

    const startDate = new Date(firstDayMonth);
    startDate.setDate(firstDayMonth.getDate() - firstDayMonth.getDay());

    const calendarDays = [];

    for (let i = 0; i < totalDays; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);

      const isToday =
        currentDay.getDate() === new Date().getDate() &&
        currentDay.getMonth() === new Date().getMonth() &&
        currentDay.getFullYear() === new Date().getFullYear();

      const isCurrentMonth = currentDay.getMonth() === month;

      calendarDays.push({
        date: currentDay,
        day: currentDay.getDate(),
        month: currentDay.getMonth(),
        year: currentDay.getFullYear(),
        isCurrentMonth,
        isToday,
      });
    }

    // Formatting data untuk tampilan (baris per minggu)
    const calendarRows = [];
    for (let i = 0; i < totalDays; i += 7) {
      calendarRows.push(calendarDays.slice(i, i + 7));
    }

    return calendarRows;
  },

  getMonthName(month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month];
  },

  getDayName(day) {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return dayNames[day];
  },

  // Fungsi utilitas untuk bekerja dengan tanggal
  isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  },
};
