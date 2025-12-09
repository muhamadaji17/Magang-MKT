import { handleSubmitData } from "../../pattern";
import {
  addCategoryContactService,
  deleteCategoryContactService,
  updateCategoryContactService,
} from "../dashboardService/contactCategoryService";

export const handleAddContactCategory = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas, addCategoryContactService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};

export const handleEditContactCategory = (extraOptions, dataRow) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(
      { ...datas, id: dataRow.id_contact_sosmed },
      updateCategoryContactService,
      {
        ...extraOptions,
        ...extraOptionsForm,
      }
    );
  };
};

export const handleDeleteContactCategory = (extraOptions) => {
  return (datas, extraOptionsForm) => {
    handleSubmitData(datas.id_contact_sosmed, deleteCategoryContactService, {
      ...extraOptions,
      ...extraOptionsForm,
    });
  };
};
