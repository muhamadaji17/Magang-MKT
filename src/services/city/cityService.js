import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchCity = async (token, extraOptions) => {
  const { setCity, setProvinceOptions } = extraOptions;
  try {
    const response = await GET("crud/city", token);
    const provinces = await GET(`crud/province`, token);
    const parse = response.payload.map((data) => ({
      city_name: data.city_name,
      city_code: data.city_code,
      id_city: data.id_city,
      province_name: data.created_province_city?.province_name || "-",
      created_by: data.created_city.user_name,
      status: data.status,
    }));
    const parseProvince = provinces.payload.map((province) => ({
      value: province.id_province,
      label: province.province_code,
    }));
    setProvinceOptions(parseProvince);
    setCity(parse);
  } catch (error) {
    console.error("Error :", error);
  }
};

export const postCity = async (data, extraOptions) => {
  const { token, refresh, setRefresh, handleCloseModal } = extraOptions;
  try {
    const response = await POST(`crud/city`, data, token);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("error post :", error);
  }
};

export const updateCity = async (cityId, updatedData, extraOptions) => {
  const { token, setRefresh, refresh, handleCloseModal } = extraOptions;
  try {
    const response = await PUT(`crud/city/${cityId}`, updatedData, token);
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Error updating City: ", error);
    throw error;
  }
};

export const deleteCity = async (cityId, extraOptions) => {
  const { token, refresh, setRefresh } = extraOptions;
  try {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure want to delete?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "yes",
      cancelButtonText: "no",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await DELETE(`crud/city/${cityId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
      }
    });
  } catch (error) {
    console.error("error delete city :", error);
  }
};
