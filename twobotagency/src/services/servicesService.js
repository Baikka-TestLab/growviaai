import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getServicesData = async () => {
  const response = await axios.get(`${API_URL}/api/services`);

  return response.data.data;
};
