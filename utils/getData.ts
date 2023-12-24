import axios from "axios";

export const getData = async (url: string, config?: {}) => {
  const res = await axios.get(url, config);

  const data = res.data;
  return data;
};
