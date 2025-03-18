import { DELETE, GET, POST, PUT } from "@/api/auth";
import showAlert from "@/utils/showAlert";
import Swal from "sweetalert2";

export const fetchOffice = async (token, extraOptions) => {
  const { setOffice, setCityOptions } = extraOptions;
  try {
    const response = await GET("crud/office", token);
    const cities = await GET(`crud/city`, token);
    const parse = response.payload.map((data) => ({
      office_name: data.office_name,
      id_office: data.id_office,
      id_city: data.id_city,
      status: data.status,
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address,
      fb: data.fb,
      ig: data.ig,
      x: data.x,
      yt: data.yt,
    }));
    const parseCity = cities.payload.map((city) => ({
      value: city.id_city,
      label: city.city_code,
    }));
    setCityOptions(parseCity);
    setOffice(parse);
  } catch (error) {
    console.error("Error :", error);
  }
};

export const postOffice = async (data, extraOptions) => {
  const { token, handleCloseModal, refresh, setRefresh } = extraOptions;
  try {
    const response = await POST(`crud/office`, data, token);
    if (response.success === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("error post :", error);
  }
};

export const updateOffice = async (officeId, updatedData, extraOptions) => {
  const { token, refresh, setRefresh, handleCloseModal } = extraOptions;
  try {
    const response = await PUT(`crud/office/${officeId}`, updatedData, token);
    if (response.status === true) {
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
    }
  } catch (error) {
    console.error("Error updating office: ", error);
    throw error;
  }
};

export const deleteOffice = async (officeId, extraOptions) => {
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
        const response = await DELETE(`crud/office/${officeId}`, token);
        showAlert("success", "Deleted", response.message);
        setRefresh(!refresh);
      }
    });
  } catch (error) {
    console.error("error delete office :", error);
  }
};
export const getOfficeById = async (searchParams, extraOptions) => {
  const { token, setOffice } = extraOptions;

  const queryString = Object.entries(searchParams)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  try {
    const response = await GET(`crud/office/by?${queryString}`, token);
    console.log("Search Results: ", response.payload);
    setOffice(response.payload);
  } catch (error) {
    console.error("Error fetching office: ", error);
  }
};
