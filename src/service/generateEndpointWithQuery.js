export const generateEndpointWithQuery = (searchQuery) => {
  const searhValues = Object.keys(searchQuery);
  if (searhValues.length === 0) return "";

  if (searhValues.length > 0) {
    return searhValues.map((key) => `${key}=${searchQuery[key]}`).join("&");
  }
};
