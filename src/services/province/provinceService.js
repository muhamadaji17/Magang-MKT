import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchProvince = async (token, extraOptions) => {
  const { setProvince, setCountryOptions } = extraOptions;
  try {
    const response = await GET("crud/province", token);
    const countries = await GET(`crud/country`, token);
    const parseCountry = countries.payload.map((data) => ({
      value: data.id_country,
      label: data.country_code,
    }));
    const parse = response.payload.map((data) => ({
      province_name: data.province_name,
      province_code: data.province_code,
      country_name: data.created_province_country?.country_name || "-",
      id_country: data.created_province_country?.id_country || "-",
      status: data.status,
      id_province: data.id_province,
      created_by: data.created_province.user_name,
    }));
    setCountryOptions(parseCountry);
    setProvince(parse);
  } catch (error) {
    console.error("Error :", error);
  }
};

export const postProvince = async (data, extraOptions) => {
  const { token, handleCloseModal, refresh, setRefresh } = extraOptions;
  try {
    const response = await POST(`crud/province`, data, token);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("error post :", error);
  }
};

export const updateProvince = async (provinceId, updatedData, extraOptions) => {
  const { token, refresh, setRefresh, handleCloseModal } = extraOptions;
  try {
    const response = await PUT(
      `crud/province/${provinceId}`,
      updatedData,
      token
    );
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Error updating province: ", error);
    throw error;
  }
};

export const deleteProvince = async (provinceId, extraOptions) => {
  const { token, setRefresh, refresh } = extraOptions;
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
        const response = await DELETE(`crud/province/${provinceId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
      }
    });
  } catch (error) {
    console.error("error delete country :", error);
  }
};

export const getProvinceById = async (searchParams, extraOptions) => {
  const { token, setProvince, setCountryOptions } = extraOptions;

  const queryString = Object.entries(searchParams)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  try {
    const response = await GET(`crud/province/by?${queryString}`, token);
    console.log("Search Results: ", response.payload);
    const parse = response.payload.map((data) => ({
      province_name: data.province_name,
      province_code: data.province_code,
      country_name: data.created_province_country?.country_name || "-",
      id_country: data.created_province_country?.id_country || "-",
      status: data.status,
      id_province: data.id_province,
      created_by: data.created_province.user_name,
    }));
    setProvince(parse);
  } catch (error) {
    console.error("Error fetching province: ", error);
  }
};
