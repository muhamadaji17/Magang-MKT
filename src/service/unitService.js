import { apiPost, apiDelete, apiPut } from "../api/apiCall";

export const addUnit = async (dataPost, token) => {
  return await apiPost(`/crud/unit`, dataPost, token);
};

export const deleteUnit = async (id, token) => {
  return await apiDelete(`/crud/unit/${id}`, token);
};

export const updateUnit = async (id, updatedUnit, token) => {
  return await apiPut(`/crud/unit/${id}`, updatedUnit, token);
};
