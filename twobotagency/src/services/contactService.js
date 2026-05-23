import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getContactData = async () => {
  const response = await axios.get(`${API_URL}/api/contact`);

  return response.data.data;
};
