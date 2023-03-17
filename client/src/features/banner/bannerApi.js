import axios from "axios";

export const fetchBannerData = async () => {
  const { data } = await axios.get("http://localhost:8080/banners");
  return data;
};
