import { fetchAbout, postAbout } from "@/services/about/aboutService";
import showAlert from "@/utils/showAlert";
import { useEffect, useState } from "react";
import useGlobalHook from "../useGlobalHook";

const useAbout = (token) => {
  const [aboutData, setAboutData] = useState([]);
  const {
    refresh,
    setRefresh,
    handleCloseModal,
    modalIsOpen,
    modalType,
    handleOpenModal,
  } = useGlobalHook();

  const getAbout = async () => {
    const response = await fetchAbout(token);
    console.log(response);
    setAboutData(response);
  };

  const onSubmit = async (data) => {
    try {
      const response = await postAbout(data, token);
      showAlert("success", "Success", response.message);
      setRefresh(!refresh);
      handleCloseModal();
      return response;
    } catch (error) {
      console.error("error post :", error);
    }
  };

  useEffect(() => {
    getAbout();
  }, [refresh]);

  return {
    aboutData,
    getAbout,
    onSubmit,
    modalIsOpen,
    handleCloseModal,
    handleOpenModal,
    modalType,
  };
};

export default useAbout;
