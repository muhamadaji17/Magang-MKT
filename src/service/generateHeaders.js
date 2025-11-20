export const generateHeaders = ({
  accessToken,
  contentType = "application/json",
}) => ({
  "Content-Type": contentType,
  "x-access-token": `mktech ${accessToken}`,
});
