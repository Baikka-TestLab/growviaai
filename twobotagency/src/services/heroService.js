import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getHeroData = async () => {
  const response = await axios.get(`${API_URL}/api/hero`);

  return response.data.data;
};
