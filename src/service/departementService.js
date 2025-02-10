import { apiDelete, apiGet, apiPost, apiPut } from "../api/apiCall"

export const deleteDepartement = async(id, token) => {
    return await apiDelete(`/crud/departement/${id}`, token);
}

export const fetchDepartements = async(token) => {
    const result = await apiGet("/crud/departement", token);
    return result.payload;
}

export const addDepartement = async(dataPost, token) => {
    return await apiPost(`/crud/departement/`, dataPost, token);
}

export const updateDepartement = async(id, updatedData, token) => {
    return await apiPut(`/crud/departement/${id}`, updatedData, token)
}