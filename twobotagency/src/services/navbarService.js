import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getNavbarData = async () => {
  const response = await axios.get(
    `${API_URL}/api/navbar`
  );

  return response.data.data;
};