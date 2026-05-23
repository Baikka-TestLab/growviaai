import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getIndustriesData = async () => {
  const response = await axios.get(`${API_URL}/api/industries`);

  return response.data.data;
};
