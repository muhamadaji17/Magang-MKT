import { GET } from "../../api";
import { generateEndpointWithQuery } from "../generateEndpointWithQuery";

export const getRoleService = async (accessToken, extraOptions) => {
  const { setDatasRole, setRefreshData, searchQuery } = extraOptions;

  const queryParams = generateEndpointWithQuery(searchQuery);
  try {
    const response = await GET(`crud/roles/by?${queryParams}`, accessToken);
    const gabung = response.data.payload?.map((data) => ({
      ...data,
      label: data.role_name,
      value: data.id_role,
    }));
    setDatasRole(gabung);
    setRefreshData(true);
  } catch (error) {
    console.error(error);
  }
};
