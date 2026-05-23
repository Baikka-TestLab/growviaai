import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getPricingData = async () => {
  const response = await axios.get(`${API_URL}/api/pricing`);

  return response.data.data;
};
