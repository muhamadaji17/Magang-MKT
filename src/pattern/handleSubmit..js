import ShowAlert from "../utils/showAlert";
import apiPost from "../api/apiPost";

export const handleSubmit = async (endpoint, data) => {
  try {
    const response = await apiPost(endpoint, data);
    console.log(response);
    if (response.status === true) {
      ShowAlert({
        title: "Success",
        text: response.message,
        icon: "success",
        showConfirmButton: true,
        timer: 2000,
      });
    } else {
      ShowAlert({
        title: "Error",
        text: response.message,
        icon: "error",
        showConfirmButton: true,
        timer: 2000,
      });
    }
  } catch (error) {
    ShowAlert({
      title: "Error",
      text: error.message,
      icon: "error",
      showConfirmButton: true,
      timer: 2000,
    });
    console.log(error);
  }
};
