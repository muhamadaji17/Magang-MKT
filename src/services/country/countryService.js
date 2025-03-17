import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchCountry = async (token, extraOptions) => {
  const { setCountry } = extraOptions;
  try {
    const response = await GET("crud/country", token);
    const parse = response.payload.map((data) => ({
      country_name: data.country_name,
      country_code: data.country_code,
      status: data.status,
      id_country: data.id_country,
      created_by: data.created_country.user_name,
    }));
    setCountry(parse);
  } catch (error) {
    console.error("error fetch country :", error);
  }
};

export const postCountry = async (data, extraOptions) => {
  const { setRefresh, token, handleCloseModal, refresh } = extraOptions;
  try {
    const response = await POST(`crud/country`, data, token);
    console.log(response);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateCountry = async (countryId, updatedData, extraOptions) => {
  const { token, handleCloseModal, refresh, setRefresh } = extraOptions;
  console.log(token);
  try {
    const response = await PUT(`crud/country/${countryId}`, updatedData, token);
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Error updating country: ", error);
    throw error;
  }
};

export const deleteCountry = async (countryId, extraOptions) => {
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
        const response = await DELETE(`crud/country/${countryId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
      }
    });
  } catch (error) {
    showAlert("error", "Error", error.message);
  }
};

export const getCountryById = async (id, extraOptions) => {
  const { token, setCountry } = extraOptions;
  try {
    const response = await GET(`crud/country/by?country_name=${id}`, token);
    console.log("Search: ", response.payload);
    setCountry(response.payload);
  } catch (error) {
    console.error("Error fetching country: ", error);
  }
};
