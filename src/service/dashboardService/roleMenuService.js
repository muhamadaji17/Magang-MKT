import { GET } from "../../api";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";

export const getRoleMenuService = async (accessToken, extraOptions) => {
  const { setDatasRoleMenu, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);

  try {
    const response = await GET(`crud/role_menu/by?${queryParams}`, accessToken);
    setDatasRoleMenu(response.data.payload);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};
