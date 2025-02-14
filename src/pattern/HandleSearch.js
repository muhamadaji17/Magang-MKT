export const handleSearch = (value, key, setSearchQuery) => {
  setSearchQuery((prev) => ({ ...prev, [key]: value }));
};
