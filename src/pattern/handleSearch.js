export const handleSearch = (setSearchQuery) => {
  return (value, key) => setSearchQuery((prev) => ({ ...prev, [key]: value }));
};
