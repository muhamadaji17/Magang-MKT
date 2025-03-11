import { useState } from "react";
import useGlobalHook from "./useGlobalHook";

const useCrudActions = ({ serviceFunction, selectedItem }) => {
  const [data, setData] = useState([]);
  const { token, refresh, setRefresh, handleCloseModal } = useGlobalHook();
  const createItem = async (data) => {
    try {
      await serviceFunction.create(data, token); // Gunakan service yang di-pass sebagai argumen
      setRefresh(!refresh); // Refresh state setelah operasi sukses
      handleCloseModal(); // Tutup modal jika ada
    } catch (error) {
      console.error("Error creating item", error);
    }
  };

  const updateItem = async (data) => {
    try {
      const itemId = selectedItem.id; // Ambil ID dari item yang sedang di-update
      await serviceFunction.update(itemId, data, token); // Panggil update service
      setRefresh(!refresh);
      handleCloseModal();
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await serviceFunction.delete(itemId, token); // Panggil delete service
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  const fetchItem = async () => {
    try {
      await serviceFunction.getAll(token);
    } catch (error) {
      console.error("Error fetching item", error);
      return [];
    }
  };

  return { createItem, updateItem, deleteItem, fetchItem, refresh };
};

export default useCrudActions;
