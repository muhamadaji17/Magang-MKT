// utils/formatters.js
export const shortenCreatedBy = (createdBy) => {
  if (!createdBy) return "-";
  // Ambil 8 karakter pertama saja
  return createdBy.substring(0, 8) + "...";
};

export const formatDateTime = (dateString) => {
  if (!dateString) return "-";
  // Convert format "2025-02-10T08:10:56.395Z" menjadi format yang lebih readable
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
